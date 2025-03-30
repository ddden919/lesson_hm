import React, {
  useState,
  useEffect
} from "react"
import s from './style.module.less'
import { Icon } from 'zarm'
import BillItem from '@/components/BillItem'

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [showTypePopup, setShowTypePopup] = useState(false);
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('2024-12');
  const [originList, setOriginList] = useState([
    
    {
      date: '2024-12-20',
      bills: [
        {
          amount: "21.53",
          date: "2024-12-20T00:00:00",
          id: 1,
          pay_type: 1,
          remark: "",
          type_id: 1,
          type_name: "餐饮"
        },
        {
          amount: "11.78",
          date: "2024-12-20T22:28:00",
          id: 2,
          pay_type: 1,
          remark: "",
          type_id: 1,
          type_name: "餐饮"
        },
        {
          amount: "9.75",
          date: "2024-12-20T22:28:00",
          id: 3,
          pay_type: 1,
          remark: "",
          type_id: 1,
          type_name: "餐饮"
        },
        {
          amount: "25.80",
          date: "2024-12-20T22:35:00",
          id: 4,
          pay_type: 2,
          remark: "",
          type_id: 11,
          type_name: "工资"
        }
      ]
    },
    {
      date: '2024-12-09',
      bills: [
        {
          amount: "25.00",
          date: "2024-12-09T09:59:00",
          id: 5,
          pay_type: 1,
          remark: "我是备注",
          type_id: 1,
          type_name: "餐饮"
        },
        {
          amount: "2508.00",
          date: "2024-12-09T00:00:00",
          id: 6,
          pay_type: 1,
          remark: "",
          type_id: 6,
          type_name: "学习"
        }
      ]
    }
  ]);
  const [list, setList] = useState(originList);

  // 账单类型列表
  const typeList = [
    { id: 'all', name: '全部类型' },
    { id: 1, name: '支出' },
    { id: 2, name: '收入' }
  ];

  // 年份列表
  const yearList = Array.from({ length: 5 }, (_, i) => 2024 + i);

  // 月份列表
  const monthList = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    return month.toString().padStart(2, '0');
  });

  // 当前选中的年份
  const [selectedYear, setSelectedYear] = useState(2024);

  // 处理类型选择
  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setShowTypePopup(false);
  };

  // 处理年份选择
  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  // 处理月份选择
  const handleMonthSelect = (month) => {
    setSelectedMonth(`${selectedYear}-${month}`);
    setShowDatePopup(false);
  };

  // 搜索关键词和筛选条件变化时，过滤账单列表
  useEffect(() => {
    // 防抖处理
    const timer = setTimeout(() => {
      if (!keyword.length) {
        setList(originList);
        return;
      }
      // 根据关键词和筛选条件过滤账单
      const filteredList = originList.map(item => {
        const filteredBills = item.bills.filter(bill => {
          // 转换金额为字符串进行比较
          const amountStr = String(bill.amount);
          const matchKeyword = 
            bill.type_name.toLowerCase().includes(keyword.toLowerCase()) ||
            amountStr.toLowerCase().includes(keyword.toLowerCase()) ||
            (bill.remark && bill.remark.toLowerCase().includes(keyword.toLowerCase()));
          const matchType = !selectedType || selectedType === 'all' || bill.pay_type === selectedType;
          const matchMonth = !selectedMonth || bill.date.startsWith(selectedMonth);
          return matchKeyword && matchType && matchMonth;
        });
        return filteredBills.length ? { ...item, bills: filteredBills } : null;
      }).filter(Boolean);
      setList(filteredList);
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword, selectedType, selectedMonth, originList]);

  return (
    <div className={s.home}>
      <div className={s.header}>
        <div className={s.dataSearch}>
          <input
            type="text"
            placeholder="请输入搜索关键词"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={s.searchInput}
          />
        </div>
        <div className={s.typeWrap}>
          <div className={s.left}>
            <span className={s.title} onClick={() => setShowTypePopup(true)}>类型<Icon className={s.arrow} type="arrow-bottom"/></span>
          </div>
          <div className={s.right}>
            <span className={s.time} onClick={() => setShowDatePopup(true)}>{selectedMonth}<Icon className={s.arrow} type="arrow-bottom"/></span>
          </div>
        </div>
      </div>
      {showTypePopup && (
        <div className={s.popupType}>
          <div className={s.popupBody}>
            <div className={s.popupHeader}>请选择类型</div>
            <div className={s.popupClose} onClick={() => setShowTypePopup(false)}>
              <Icon type="wrong"/>
            </div>
            <div className={s.popupContent}>
              <div className={s.typeList}>
                {typeList.map(type => (
                  <div
                    key={type.id}
                    className={`${s.typeItem} ${selectedType === type.id ? s.active : ''}`}
                    onClick={() => handleTypeSelect(type.id)}
                  >
                    {type.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {showDatePopup && (
        <div className={s.popupDate}>
          <div className={s.popupBody}>
            <div className={s.popupHeader}>请选择月份</div>
            <div className={s.popupClose} onClick={() => setShowDatePopup(false)}>
              <Icon type="wrong"/>
            </div>
            <div className={s.popupContent}>
              <div className={s.yearList}>
                {yearList.map(year => (
                  <div
                    key={year}
                    className={`${s.yearItem} ${selectedYear === year ? s.active : ''}`}
                    onClick={() => handleYearSelect(year)}
                  >
                    {year}
                  </div>
                ))}
              </div>
              <div className={s.monthList}>
                {monthList.map(month => (
                  <div
                    key={month}
                    className={`${s.monthItem} ${selectedMonth === `${selectedYear}-${month}` ? s.active : ''}`}
                    onClick={() => handleMonthSelect(month)}
                  >
                    {month}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={s.contentWrap}>
        {
          list.map((item) => <BillItem key={item.date} bill={item}/>)
        }
      </div>
    </div>
  )
}

export default Home
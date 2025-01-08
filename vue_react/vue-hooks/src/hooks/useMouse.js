// 组件以UI建设为主,内部业务应该剥离
import { ref, onMounted, onUnmounted } from 'vue';
export function useMouse() {
    let x = ref(0), y = ref(0);
    // console.log('use Mouse');
    const mousePosHandler = (e) => {
        x.value = e.pageX;
        y.value = e.pageY;
        console.log('还在');
    }

    onMounted(() => {
        window.addEventListener('mousemove', mousePosHandler)
    })
    // 防止内存泄漏
    onUnmounted(() => {
        window.removeEventListener('mousemove', mousePosHandler)
    })
    return {
        x, y
    }
}
export function useMemo() {
    console.log('use Memo');
}

export default {
    name: 'useMouse'
}

// export default useMouse; 不需要加花括号解构，因为是默认导出 如果是export function useMouse() {} 则需要加花括号解构
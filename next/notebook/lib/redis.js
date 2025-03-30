import Redis from "ioredis"; // redis node js client

const redis = new Redis(
    {
        host: "127.0.0.1",
        port: 6379, // redis 服务端口
        password: 123456, // redis 服务密码
    }
)
// key => value NOSQL JSON 非关系型数据库
const initialData = {
  "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
}

// 列表
export async function getAllNotes() {
    
    const data = await redis.hgetall("notes"); // redis api collection mysql table
    if (Object.keys(data).length === 0) {
        // 数据库格式是JSON
        await redis.hset("notes", initialData);
    }
    return await redis.hgetall("notes");
}

// add
export async function addNote(data) {
    // 唯一值
    const uuid = uuidv4();
    // const uuid = Date.now().toString() 
    await redis.hset("notes", [uuid], data); // 序列化JSON对象为字符串
}

export async function getNote(uuid) {
    return JSON.parse(await redis.hget("notes", uuid)); // 反序列化字符串为JSON对象
}

export async function delNote(uuid) {
    await redis.hdel("notes", uuid); // 删除指定键值对
}

export async function updateNote(uuid, data) {
    await redis.hset("notes", [uuid], data); 
}
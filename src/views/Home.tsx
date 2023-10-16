import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Home',

  setup() {
    onMounted(()=>{
      interface Point {
        name: string,
        age: number
      }

      // 定义构造函数类型
      interface PointConstructor {
        new(value:string, value2:number):Point
      }
      
      class newObject implements Point {
        readonly name:string
        readonly age:number
        constructor(name:string, age:number){
          this.name = name
          this.age = age
        }
      }

      const newPoint = (
        constructor:PointConstructor,
        name:string, age:number
      ):Point=>{
        return new constructor(name, age)
      }
      const res =  newPoint(newObject, '芜湖', 24)
      console.log(res, 'res')
    })
  },
  
  render(){
    return (
      <div>111</div>
    )
  }
});
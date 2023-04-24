# 一、vue介绍 

## 1.1- 官网

* 英文官网：http://vuejs.org
* 中文官网：https://cn.vuejs.org
* `Vue2`中文官网：https://v2.cn.vuejs.org

## 1.2- `Vue`介绍

> * Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://v2.cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
> * 作者: 尤雨溪

## 1.3- `Vue`的特点

> * 遵循`MVVM`模式
>
> * 编码简洁, 体积小, 运行效率高, 适合移动/PC端开发
>
> * 它本身只关注界面, 也可以配合其它第三方库开发项目

## 1.4- `Vue`周边库

> * ` vue-cli（vue脚手架）`
>
> * `axios`
>
> * `vue-router`（路由）
>
> * `vuex`（状态管理）
>
> * `element-ui`（`UI`组件库）
>
>   ……

## 1.5- `Vue` 环境的配置

* 直接引入

  ```shell
  # 下载地址
  https://v2.cn.vuejs.org/v2/guide/installation.html
  ```

  

* `CDN` 引入

  ```html
  <!-- 开发环境版本，包含完整的警告和调试模式 -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <!-- 生产环境版本，删除了警告 -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  ```

* `NPM` 安装

  ```shell
  # 最新稳定版
  $ npm install vue
  ```

## 1-1- `JS`-`Vue`-React操作DOM

### 1-1-1- `js`操作DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
<input type="text">
<div></div>
</body>
<script>
	const myInput = document.querySelector("input");
	const myDiv = document.querySelector("div");
	let str = "我从今天开始学习Vue!";
	myInput.value = myDiv.innerText = str;
	myInput.oninput = function(){
		// console.log("input",this.value);
		myDiv.innerText = this.value;
	}
	
	
	// 内容发生改变且失去光标后执行
	// myInput.onchange = function(){
	// 	console.log("change")
	// }
</script>
</html>
```



### 1-1-2- React操作DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/react.development.js"></script>
	<script src="lib/react-dom.development.js"></script>
	<script src="lib/babel.min.js"></script>
</head>
<body>
	<div id="root"></div>
</body>
<script type="text/babel">
	const root = ReactDOM.createRoot(document.querySelector("#root"));
	const App = ()=> {
		const [str,setStr] = React.useState("我从今天开始学习Vue!");
		return (
			<>
				<input onChange={(e)=>setStr(e.target.value)} value={str} type="text"/>
				<div>{str}</div>
			</>
		)
	}
	root.render(<App/>);
</script>
</html>
```



### 1-1-3- `Vue`操作DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
	<div id="root">
		<input v-model="str" type="text">
		<div>{{str}}</div>
	</div>
</body>
<script>
	// Vue.config.productionTip = false;
	new Vue({
		el:"#root",
		data:{
			str:"我从今天开始学习Vue!"
		}
	})
</script>
</html>
```



# 二- `Vue` 的基本用法及模板语法

> `Vue.js` 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层` Vue` 实例的数据。所有 `Vue.js` 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。
>
> 在底层的实现上，`Vue` 将模板编译成虚拟 DOM 渲染函数。结合响应系统，`Vue` 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

##  2-1- `Vue`实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>

</body>
<script>
	const info = {
		userName:"zhangsan",
		age:12
	}
	// vm称为Vue的实例
	// 1- Vue是一个构造函数
	// 2- 实例化时需要传递一个对象（Vue的配置对象）
	// 3- Vue配置对象下的data对象中的属性会作为Vue的实例属性。
	//    推论：Vue实例中可以直接使用data属性。
	const vm = new Vue({
		// 数据
		data:{
			a:1,
			b:2,
			c:3,
			info
		}
	});
	console.log(vm.a,vm.b,vm.c,vm.info === info);
	
</script>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>

</body>
<script>
	// 1- Vue来自于vue.js
	// 2- Vue实例化出来的结果称为Vue实例
	// 3- Vue接收的参数称为Vue配置对象
	// 4- 配置对象中的data属性中的值可以作为Vue实例的属性值。
	// 5- data的属性发生改变，那么Vue实例中对应的属性也会改变
	// 6- Vue实例中的属性发生改变对应data的属性也会改变。
	// 7- methods中的属性也会作为Vue实例属性。
	const data = {
		a:1,
		b:2,
		c:3
	}
	const vm = new Vue({
		data,
		methods:{
			fn(){
				console.log(this===vm,"fn",this.a,this.b,this.c);
			}
		}
	})
	vm.a = 100;
	vm.b = 200;
	vm.c = 300;
	console.log(vm,data.a,data.b,data.c);// 100 200 300
	
	data.a = 90;
	data.b = 99;
	data.c = 999;
	console.log(vm.a,vm.b,vm.c);// 90 99 999
	
	vm.fn();
</script>
</html>
```

## 2-2- 挂载`Vue`实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
	<div class="app" id="root">
		<p>userName:{{userName}}</p>
		<p>age:{{age}}</p>
	</div>
</body>
<script>
	new Vue({
		// el的值可以是字符串也可以是DOM元素。
		// 模板：1- 支持HTML
		//      2- 可以使用Vue语法：比如在模板中可以直接使用Vue实例中的数据。
		// el:"#root",// 将Vue挂载至id为root的元素中。（id为root的元素即是模板）
		// el:".app",// 将Vue挂载至第一个class为app的元素中
		// el:"div",// 将Vue挂载至第一个名字为div的元素中
		// el:"html",// 不建议
		el:"body",// 不建议
		el:document.querySelector("#root"),
		data:{
			userName:"zhangsan",
			age:12
		}
	})
</script>
</html>
```

## 2-3- 同一个元素挂载多个Vue实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
	<div id="root">
		<h3>{{name}}</h3>
	</div>
</body>
<script>
	// 如果多个Vue实例挂载至同一个元素容器，那么只有第一个生效
	new Vue({
		el:"#root",
		data:{
			name:"Vue实例"
		}
	})
	
	new Vue({
		el:"#root",
		data:{
			name:"Vue实例2"
		}
	})
</script>
</html>
```

## 2-4- 将不同的实例挂载至不同的元素容器中

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">{{name}}</div>
<hr/>
<div id="app">{{name}}</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			name:"root"
		}
	})
	new Vue({
		el:"#app",
		data:{
			name:"app"
		}
	})
</script>
</html>
```

## 2-5- 插值表达式语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!--  字符串：1-zhangsan	-->
	<p>1-zhangsan</p>
	<!--  字符串：2-lisi	-->
	<p>{{"2-lisi"}}</p>
	<p>{{true}}</p>
	<p>{{false}}</p>
	<p>{{1}}</p>
	<p>undefined:{{undefined}}</p>
	<p>null:{{null}}</p>
	<p>数组：{{[1,2,3,4]}}</p>
	<p>对象：{{({a:1,b:2,c:3})}}</p>
	<p>{{a}}</p>
	<p>{{userName}}</p>
	<p>age:{{age}}</p>
	<p>obj:{{(obj)}}</p>
	<p>fn:{{fn()}}</p>
	<p>{{fn}}</p>
	<p>{{userName.split("").reverse().join("")}}</p>
</div>
</body>
<script>
	// 模板中如果遇到{{}}，那么会将其包裹的内容进行输出。如果内容被双引号，单引号包裹会作为字符串来处理。
	// {{}}中可以渲染：字符串，数字，布尔,数组（数组不会展开）,对象（需要用括号包裹）
	// {{}}中不可以渲染：null,undefined
	new Vue({
		el:"#root",
		data:{
			a:1,
			userName:"zhangsan",
			age:null,
			obj:{
				a:1,
				b:2,
				c:3,
			}
		},
		methods:{
			fn(){
				return 100;
			}
		}
	})
</script>
</html>
```

## 2-6- 关于methods

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click="fn">点我</button>
</div>
</body>
<script>
	
	new Vue({
		el:"#root",
		data:{
			str:"data->str"
		},
		methods:{
			// 箭头函数：
			fn:()=>{
				console.log(this.str);// undefined
			},
			
			// 非简写：
			// fn:function(){
			// 	console.log(this.str);
			// }
			
			// 简写：
			// fn(){
			// 	console.log(this.str);// vue实例
			// }
			
			
			
		}
	})
</script>
</html>
```

## 2-7- key管理重复元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<template v-if="loginType==='userName'">
		<label>用户名</label> <input key="userName" placeholder="请输入您的用户名" type="text">
	</template>
	<template v-else-if="loginType==='email'">
		<label>邮箱</label> <input key="email" placeholder="请输入您的邮箱" type="text">
	</template>
	<button @click="changeLoginType">切换登陆方式</button>
</div>
</body>

<script>
	new Vue({
		el:"#root",
		data:{
			loginType:"userName"
		},
		methods:{
			changeLoginType(){
				this.loginType = this.loginType === "userName"?"email":"userName";
			}
		}
	})
</script>
</html>
```





# 三- `Vue`中的指令(重点)

> 指令 (Directives) 是带有 `v-` 前缀的特殊 attribute。指令 attribute 的值预期是**单个 JavaScript 表达式** (`v-for` 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

## 3-1- v-text与v-html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<p>{{str}}|{{str}}|{{str}}</p>
	<!-- 将实例属性str在标签内进行渲染，会覆盖原内容-->
	<p v-text="str">我是一个P元素{{str}}</p>
	<p v-text=str>我是一个P元素{{str}}</p>
	<!-- 将实例属性str在标签内进行渲染，会覆盖原内容,可以识别HTML标签-->
	<p v-html="str">我也是一个p元素</p>
	
	<!--tempalte:包裹标签，不会进行渲染	-->
	<template>
		<p>1</p>
		<p>2</p>
	</template>
	
	<hr/>
	<!-- tempalte与v-text以及v-html结合使用不会渲染内容	-->
	<template v-text="str"></template>
	
</div>
</body>
<script>
	// {{}}: 可以将包裹的内容进行输出（可以指定输出位置 ），不会识别HTML标签。
	new Vue({
		el:"#root",
		data:{
			str:"<a href='http://www.baidu.com'>我现在挺好的！</a>"
		}
	})
</script>
</html>
```





## 3-2- v-if、v-else-if、v-else (条件渲染)

````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<p>{{sex===1?"男":"女"}}</p>
	<hr/>
	<!-- isBol为true-渲染true, 为false-渲染内容-->
	<p>{{isBol || "内容"}}</p>
	<hr/>
	<!-- isBol为true-渲染内容, 为false-渲染false-->
	<p>{{isBol && "内容"}}</p>
	<hr/>
	<p>{{fn(90)}}</p>
	<p>{{fn(30)}}</p>
	<p>{{fn(19)}}</p>
	<p>{{fn(13)}}</p>
	<p>{{fn(7)}}</p>
	<p>{{fn(3)}}</p>
	<hr/>
	<p v-if="sex===1">男</p>
	<p v-else-if="sex===2">女</p>
	<p v-else>未知</p>
	<hr/>
	<template v-if="isLogin">
		<p>用户名：zhangsan</p>
		<p>年龄：12</p>
	</template>
	<template v-else>
		<p>您未登陆</p>
		<button>点我登陆</button>
	</template>
	
</div>
</body>
<script>
	// v-if可以单独使用
	// v-else-if必须要结合v-if
	// v-else必须要结合v-if或v-else-if
	// 注意：使用条件指令的元素之间不允许出现其它元素。
	// 注意：条件指令可以与template结合使用。
	// 注意：如果条件满足会进行渲染，不满足不渲染。
	new Vue({
		el:"#root",
		data:{
			sex:2,
			isBol:true,
			isLogin:true
		},
		methods:{
			fn(age){
				if(age>60) return "老年"
				if(age>28) return "中年"
				if(age>18) return "青年"
				if(age>12) return "少年"
				if(age>6) return "儿童"
				return "幼儿"
			}
		}
	})
</script>
</html>
````

## 3-3- v-show

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<p v-show="isBol">我是一个p元素</p>
</div>
</body>
<script>
	// v-if:条件成立会渲染，不成立不会渲染
	// v-show:由display样式属性决定是否显示。
	new Vue({
		el:"#root",
		data:{
			isBol:true
		}
	})
</script>
</html>
```

## 3-4- v-bind（属性渲染）

### 3-4-1- 基本用法

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!-- 未简写：-->
	<img width="200" src="https://inews.gtimg.com/newsapp_ls/0/15599753990_640360/0" alt="">
	<!--将实例属性w作为width的属性值，将实例属性imgSrc的值作为src的属性值	-->
	<img v-bind:width="w" v-bind:src="imgSrc" alt="">
	<!--[my]->属性的属性名字是Vue实例my的值。	-->
	<img v-bind:[my]="w" v-bind:[height]="200" v-bind:src="imgSrc" alt="">
	<hr/>
	<!-- 使用简写：可以省略v-bind,直接使用冒号-->
	<img :width="w" :src="imgSrc" alt="">
	<img :src="imgSrc" :[my]="w" alt="">
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			my:"width",
			height:"height",
			w:300,
			imgSrc:"https://inews.gtimg.com/newsapp_ls/0/15599753990_640360/0"
		}
	})
</script>
</html>
```



### 3-4-2- style

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!--字符串-->
	<p style="background:red;color:yellow;">1</p>
	<p style=background:red;color:yellow;>2</p>
	<p :style="'background:red;color:yellow;'">3</p>
	<p :style="one">4</p>
	<p :style=one>5</p>
	<!--对象-->
	<p :style="two">6</p>
	<!--数组-->
	<p :style="[bg,cl]">7</p>
	<p :style="[two]">8</p>
	<p :style="arr">9</p>
</div>
</body>
<script>
	// style的值可以是字符串
	// style的值可以是对象
	// style的值可以是数组
	new Vue({
		el:"#root",
		data:{
			one:"background:red;color:yellow;",
			// two===> background:green,color:red
			two:{
				background:"green",
				color:"red"
			},
			bg:{
				background:"red"
			},
			cl:{
				color:"green"
			},
			arr:[{
				background:"red"
			},{
				color:"green"
			}]
		}
	})
</script>
</html>
```



### 3-4-3- class

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		.bg{
			background:red;
		}
		.cl{
			color:yellow;
		}
	</style>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!--字符串-->
	<p class="bg">1-我确定你就是那只匹着羊皮的狼！</p>
	<p class="cl">2-我确定你就是那只匹着羊皮的狼！</p>
	<p class="cl bg">3-我确定你就是那只匹着羊皮的狼！</p>
	<p :class="'cl bg'">4-我确定你就是那只匹着羊皮的狼！</p>
	<p :class="suibian">5-我确定你就是那只匹着羊皮的狼！</p>
	<p :class="num===101?'cl':'bg'">5-1-我确定你就是那只匹着羊皮的狼！</p>
	<!--数组:数组中的每个元素即是class名字-->
	<p :class="['cl','bg']">6-我确定你就是那只匹着羊皮的狼！</p>
	<p :class="[one,two]">7-我确定你就是那只匹着羊皮的狼！</p>
	<p :class="my">8-我确定你就是那只匹着羊皮的狼！</p>
	<!--对象: 属性值是一个布尔值，如果值为true,代表要将属性的名字作为样式名，false不会作为样式名-->
	<p :class="{cl:true}">9-我确定你就是那只匹着羊皮的狼！</p>
	<p :class="{bg:false}">10-我确定你就是那只匹着羊皮的狼！</p>
	<p :class="{bg:true,cl:true}">11-我确定你就是那只匹着羊皮的狼！</p>
	
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			num:100,
			suibian:"cl bg",
			one:"cl",
			two:"bg",
			my:["cl","bg"]
		}
	})
</script>
</html>
```



## 3-5- v-model

### 3-5-1- 基本用法

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!--单项数据流-->
	<input :value="str" type="text">
	<!--双向绑定1-->
	<input v-model:value="str" type="text">
	<!--双向绑定2：可以省略value属性-->
	<input v-model="str" type="text">
	<!--注意：v-model只允许与表单元素结合使用。以下不允许:-->
	<img v-model:src="imgSrc" alt="">
	<div>{{str}}</div>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			str:"我爱你中国，我亲爱的母亲",
			imgSrc:"https://inews.gtimg.com/newsapp_ls/0/15599753990_640360/0"
		}
	})
</script>
</html>
```

### 3-5-2- 修饰符

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<input v-model="str" type="text">
	<hr/>
	<h3>number</h3>
	<!--1-number: 文本框的值是一个数字-->
	<input v-model.number="a" type="text">+
	<input v-model.number="b" type="text">={{a+b}}
	<hr/>
	<h3>trim</h3>
	<!--2-trim:可以去除左右空格。中间的空格是去不了的。-->
	<input v-model.trim="str" type="text">
	<hr/>
	<h3>lazy</h3>
	<!--3-lazy:当视图发生改变后，数据不会直接变，当失去焦点后才会发生响应。-->
	<input v-model.lazy="str" type="text">
	<div>青龙{{str}}白虎</div>
</div>
</body>
<script>
	// 修饰符：在使用指令时，点（.）右侧的名字
	new Vue({
		el:"#root",
		data:{
			str:"手机",
			a:1,
			b:2
		}
	})
</script>
</html>
```

### 3-5-3- v-model是语法糖

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!--双向绑定-->
	<input v-model="str" type="text">
	<!--单向绑定	-->
	<input :value="str" type="text" />
	<!--v-model本质是 :value与@input的语法糖	-->
	<input @input="changeStr" :value="str" type="text">
	<div>{{str}}</div>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			str:"我现在学习VUE"
		},
		methods:{
			changeStr(e){
				this.str = e.target.value;
			}
		}
	})
</script>
</html>
```

### 3-5-4-  操作表单数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<form @submit.prevent="submitHandler" action="">
		<p>用户名：<input v-model="userName" type="text"></p>
		<p>城市：
			<select v-model.number="city">
				<option value="1">北京</option>
				<option value="2">上海</option>
				<option value="3">深圳</option>
				<option value="4">西安</option>
				<option value="5">武汉</option>
				<option value="6">成都</option>
			</select>
		</p>
		<p>性别：
			<input v-model.number="sex" type="radio" value="1">男
			<input v-model.number="sex" type="radio" value="2">女
		</p>
		<p>爱好：
			<input v-model.number="hobby" type="checkbox" value="1">学习
			<input v-model.number="hobby" type="checkbox" value="2">看书
			<input v-model.number="hobby" type="checkbox" value="3">敲代码
		</p>
		<button>提交</button>
	</form>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			userName:"zhangsan",
			city:2,
			sex:1,
			hobby:[1,3]
		},
		methods:{
			submitHandler(){
				console.log("用户名：",this.userName);
				console.log("城市：：",this.city);
				console.log("性别：：",this.sex);
				console.log("爱好：：",this.hobby);
			}
		}
	})
</script>
</html>
```





## 3-6- v-for（列表渲染）

### 3-6-1- 基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<h3>数组</h3>
	<!--数组:value元素，index下标-->
	<div v-for="value in arr">{{value}}</div>
	<hr/>
	<div v-for="(value,index) in arr">{{value}}|{{index}}</div>
	<hr/>
	<!--对象:以下遍历div出现的次数与对象属性的个数相同
		value:属性值
		key:属性的名字
	-->
	<h3>对象</h3>
	<div v-for="value in obj">{{value}}</div>
	<hr/>
	<div v-for="(value,key) in obj">{{key}}|{{value}}</div>
	<hr/>
	<!--字符串:字符串的长度与div渲染的个数相同
		s:字符
		i:字符所在的位置
	-->
	<h3>字符串</h3>
	<div v-for="s in str">{{s}}</div>
	<hr/>
	<div v-for="(s,i) in str">{{s}}|{{i}}</div>
	<hr/>
	<!--数字:遍历的次数与数字的大小相同
		n从1开始直至与数字大小相同。
	-->
	<h3>数字</h3>
	<div v-for="n in num">{{n}}</div>
	<hr/>
	<div v-for="(n,i) in num">{{n}}|{{i}}</div>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			arr:[1,2,3,4],
			obj:{
				a:1,
				b:2,
				c:3,
				d:4
			},
			str:"我现在在上海工作！",
			num:6
		}
	})
</script>
</html>
```



### 3-6-2- 使用key

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
<!--注意：key必须是唯一的，不允许重复！-->
	
	<!--1-遍历数组使用key---下标-->
<!--	<div :key="index" v-for="(item,index) in bookList" >-->
<!--		<p>作者：{{item.author}}</p>-->
<!--		<p>书名：《{{item.bookName}}》</p>-->
<!--		<hr/>-->
<!--	</div>-->
	
	
	<!--2-遍历数组使用key---id-->
<!--	<div :key="item.id" v-for="(item,index) in bookList" >-->
<!--		<p>作者：{{item.author}}</p>-->
<!--		<p>书名：《{{item.bookName}}》</p>-->
<!--		<hr/>-->
<!--	</div>-->
	
	<!--3-v-for可以与template结合使用	-->
<!--	<template v-for="(item,index) in bookList" >-->
<!--		<p>作者：{{item.author}}</p>-->
<!--		<p>书名：《{{item.bookName}}》</p>-->
<!--		<hr/>-->
<!--	</template>-->
	
	
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			bookList:[
				{
					id:1,
					bookName:"天龙八部",
					author:"金庸"
				},{
					id:2,
					bookName:"吞噬星空",
					author: "我吃西红柿"
				},{
					id:3,
					bookName:"修真四万年",
					author: "奔跑的蜗牛"
				}
			]
		}
	})
</script>
</html>
```



## 3-7- v-on

### 3-7-1- 基本使用-显示与隐藏

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!--1-直接写JS语句-->
	<button v-on:click="isShow=!isShow">显示与隐藏1</button>
	<!--2-直接写函数-->
	<button v-on:click="changeIsShow">显示与隐藏2</button>
	<!--3-可以调用函数()-->
	<button v-on:click="changeIsShow()">显示与隐藏3</button>
	<div v-show="isShow" style="width: 200px;height:200px;background:red;"></div>
</div>
</body>
<script>
	// 视图是通过数据进行驱动的。（数据发生改变，视图会重新执行）
	new Vue({
		el:"#root",
		data:{
			isShow:true
		},
		methods:{
			changeIsShow(){
				// console.log("changeIsShow",this)
				this.isShow = !this.isShow;
			}
		}
	})
</script>
</html>
```



### 3-7-2- 使用注意

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
<button v-on:click="num=num+1">语句：{{num}}</button>
<button v-on:click="addOne">函数：{{num}}</button>
<button v-on:click="changeNum(3,$event)">函数调用：{{num}}</button>
	
	
	<a v-on:click="go" href="http://www.baidu.com">百度</a>
	<!--@是von:的简写-->
	<a @click="go" href="http://www.jd.com">京东</a>
</div>
</body>
<script>
	// 总结1：如果代码逻辑比较简单，不会进行复用，直接写语句即可
	// 总结2：如果事件处理函数不需要接收参数，那么直接写成函数
	// 总结3：如果事件处理函数需要接收参数，那么直接写成调用函数
	new Vue({
		el:"#root",
		data:{
			num:0
		},
		methods:{
			addOne(e){
				console.log("addOne",e.target.innerText);
				this.num+=1;
			},
			changeNum(num,e){
				console.log("changeNum",e.target.innerText)
				this.num+=num;
			},
			go(e){
				e.preventDefault();
				alert(e.target.innerText);
			}
		}
	})
</script>
</html>
```

### 3-7-3- 乞丐版切换

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		*{
			padding:0;
			margin:0;
		}
		#root button{
			padding:5px;
			margin:5px;
		}
		#root button.active{
			background:red;
		}
		#root div{
			width: 500px;
			height: 300px;
			border:1px solid green;
		}
	</style>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click="index=0" :class="{active:index===0}">体育</button>
	<button @click="index=1" :class="{active:index===1}">娱乐</button>
	<button @click="index=2" :class="{active:index===2}">财经</button>
	<div v-show="index===0">体育新闻</div>
	<div v-show="index===1">财经新闻</div>
	<div v-show="index===2">娱乐新闻</div>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			index:0
		}
	})
</script>
</html>
```



### 3-7-4- 加强版切换

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		*{
			padding:0;
			margin:0;
		}
		#root button{
			padding:5px;
			margin:5px;
		}
		#root button.active{
			background:red;
		}
		#root div{
			width: 500px;
			height: 300px;
			border:1px solid green;
		}
	</style>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
<!--永远不要将v-for与v-if结合使用。-->
	<button @click="index=i" :class="{active:index===i}" v-for="(item,i) in newsInfo" :key="i">{{item.type}}</button>
	<div v-show="index===i" v-for="(item,i) in newsInfo" :key="'div'+i">
		<p v-for="v in item.newsList">
			<a :href="v.newsHref">{{v.newsTitle}}</a>
		</p>
	</div>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			newsInfo:[
				{
					type:"体育",
					newsList:[
						{
							id:1,
							newsTitle:"体育新闻1",
							newsHref:"http://www.baidu.com"
						},
						{
							id:2,
							newsTitle:"体育新闻2",
							newsHref:"http://www.qq.com"
						}
					]
				},{
					type:"娱乐",
					newsList:[
						{
							id:1,
							newsTitle:"娱乐新闻1",
							newsHref:"http://www.baidu.com"
						},
						{
							id:2,
							newsTitle:"娱乐新闻2",
							newsHref:"http://www.qq.com"
						}
					]
				},{
					type:"财经",
					newsList:[
						{
							id:1,
							newsTitle:"财经新闻1",
							newsHref:"http://www.baidu.com"
						},
						{
							id:2,
							newsTitle:"财经新闻2",
							newsHref:"http://www.qq.com"
						}
					]
				}
			],
			index:0
		}
	})
</script>
</html>
```

### 3-7-5- 修饰符

#### 3-7-5-1- prevent

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!--默认行为1：跳转-->
	<a @click.prevent="fn1" href="http://www.baidu.com">百度</a>
	<hr/>
	<!--默认行为2：提交表单-->
	<form @submit.prevent="fn3" action="https://www.baidu.com/s">
		<input type="text" name="wd">
		<button @click.prevent="fn2">搜索1</button>
		<button>搜索2</button>
	</form>
	<hr/>
	<!--默认行为3：右击	-->
	<div @contextmenu.prevent="fn4" style="width:300px;height:300px;background:red;"></div>
</div>
</body>
<script>
    // 通过修饰符.prevent可以移除默认行为。
	new Vue({
		el:"#root",
		data:{
		
		},
		methods:{
			fn1(e){
				// e.preventDefault();
				alert("fn1")
			},
			fn2(e){
				// e.preventDefault();
				alert("fn2");
			},
			fn3(e){
				// e.preventDefault();
				alert("fn3");
			},
			fn4(e){
				// e.preventDefault();
				alert("fn4");
			}
		}
	})
</script>
</html>
```

#### 3-7-5-1- stop

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<div @click="outter" style="width:500px;height: 500px;background:green">
		<div @click.stop="middle" style="width:300px;height: 300px;background:red">
			<button @click.stop="inner(1,$event)">点我</button>
		</div>
	</div>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
		
		},
		methods:{
			outter(){
				alert("outter");
			},
			middle(e){
				// e.stopPropagation();
				alert("middle")
			},
			inner(num,e){
				// e.stopPropagation();
				alert("inner"+num);
			}
		}
	})
</script>
</html>
```



#### 3-7-5-1- once

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click.once="fn">点我</button>
</div>
</body>
<script>
	// once修饰符，对应的事件处理函数只会运行一次
	new Vue({
		el:"#root",
		data:{
		
		},
		methods:{
			fn(){
				alert("fn");
			}
		}
	})
</script>
</html>
```



#### 3-7-5-1- 修饰符串联

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<form @click="fn3" action="https://www.baidu.com/s">
		<input @click.stop="fn2" name="wd" type="text">
		<button @click.stop.prevent.once="fn1">搜索</button>
	</form>
</div>
</body>
<script>
	// 同一个指令指定多个修饰符的行为称为串联。
	new Vue({
		el:"#root",
		data:{
		
		},
		methods:{
			fn1(){
				alert("fn1");
			},
			fn2(){
				alert("fn2");
			},
			fn3(){
				alert("fn3");
			}
		}
	})
</script>
</html>
```



### 3-7-6- 键盘事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<input placeholder="按下回车触发-13" @keydown.13="fn" type="text">
	<input placeholder="按下回车触发-enter" @keydown.enter="fn" type="text">
	<input placeholder="left-37" @keydown.37="fn" type="text">
	<input placeholder="top-38" @keydown.38="fn" type="text">
	<input placeholder="right-39" @keydown.39="fn" type="text">
	<input placeholder="bottom-40" @keydown.40="fn" type="text">
	<input placeholder="a-65" @keydown.65="fn" type="text">
	<input placeholder="b-66" @keydown.66="fn" type="text">
	<input placeholder="left-left" @keydown.left="fn" type="text">
	<input placeholder="top-38" @keyup.38="fn" type="text">
	<input placeholder="right-right" @keydown.right="fn" type="text">
	<input placeholder="bottom-40" @keydown.40="fn" type="text">
	<input placeholder="a-a" @keydown.a="fn" type="text">
	<input placeholder="b-b" @keydown.b="fn" type="text">
	
	
	<input placeholder="tab-tab" @keydown.tab="fn" type="text">
	<input placeholder="delete-delete" @keydown.delete="fn" type="text">
	<input placeholder="space-space" @keydown.space="fn" type="text">
	<input placeholder="ctrl-ctrl" @keydown.ctrl="fn" type="text">
	<input placeholder="alt-alt" @keydown.alt="fn" type="text">
	<input placeholder="ctrl+c" @keydown.ctrl.c="fn" type="text">
	
	
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
		
		},
		methods:{
			fn(e){
				// if(e.keyCode === 13){
				// 	console.log("fn");
				// }
				console.log("fn",e.keyCode);
				
			}
		}
	})
</script>
</html>
```

### 3-7-7- 模拟百度

* 封装JSONP

  ```JS
  // 使用promise，处理结果
  function jsonp(options={}){
  	return new Promise(function(resolve,reject){
  		let fnName = "jquery"+Math.random().toString(36).slice(2)+Date.now();
  		if(options.fnName)
  			fnName = options.fnName;
  		
  		
  		window[fnName] = function(data){
  			resolve(data)
  		}
  		const script = document.createElement("script");
  		
  		const {params={}} = options;
  		// {prod:"pc",wd:"三国}
  		params[options.jsonp] = fnName;
  		// params===> {prod:"pc",wd:"三国,cb:jquery68769876987698}
  		// Object.keys(params);// ["prod","wd","cb]
  		// Object.keys(params).map(v=>v+"="+params[v]);// ["prod=pc","wd=三国","cb=jquery68769876987698"]
  		// Object.keys(params).map(v=>v+"="+params[v]).join("&");// prod=pc&wd=三国&cb=jquery68769876987698
  		
  		script.src = options.url+"?"+Object.keys(params).map(v=>v+"="+params[v]).join("&");
  		script.onload = function(){
  			delete window[fnName];// 移除函数
  			document.body.removeChild(script);
  		}
  		document.body.appendChild(script);
  	})
  	
  }
  ```

* 模拟百度

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>Title</title>
  	<style>
  		*{
  			padding:0;
  			margin:0;
  		}
  		p{
  			border:1px solid green;
  		}
  		p.active{
  			background:gray;
  		}
  	</style>
  	<script src="lib/vue.js"></script>
  </head>
  <body>
  <div id="root">
  	<form action="https://www.baidu.com/s">
  		<input @keyup.38.40="changeIndex" :value="wd"  @input="search" autocomplete="off" type="text" name="wd">
  		<button>搜索</button>
  	</form>
  	<p :class="{active:index===i}" v-for="(item,i) in g" :key="item.sa">{{item.q}}</p>
  </div>
  </body>
  <script src="lib/jsonp.js"></script>
  <script>
  	new Vue({
  		el:"#root",
  		data:{
  			g:[],
  			timer:null,
  			index:-1,
  			wd:"",// 切换（向上向下）选中的内容
  			q:""// 记录搜索的关键词
  		},
  		methods:{
  			changeIndex(e){
  				if(e.keyCode === 40){
  					// 按向下
  					console.log("向下");
  					this.index++;
  					if(this.index>this.g.length-1) {
  						this.index=-1;
  						this.wd = this.q;
  					}else
  						this.wd = this.g[this.index].q;
  					
  				}else if(e.keyCode === 38){
  					// 按向上
  					console.log("向上");
  					this.index--;
  					if(this.index < -1){
  						this.index = this.g.length-1;
  					}
  					
  					if(this.index === -1) this.wd = this.q;
  					else this.wd = this.g[this.index].q;
  				}
  			},
  			async search(e){
  				// 防抖：指定的时间内最多执行一次。
  				if(this.timer) clearTimeout(this.timer);
  				this.timer = setTimeout(async ()=>{
  					const result = await jsonp({
  						url:"https://www.baidu.com/sugrec",
  						params:{
  							prod:"pc",
  							wd:e.target.value.trim()
  						}
  					})
  					console.log(result);
  					this.g = result.g;
  					this.q = this.wd = result.q;
  				},300);
  			}
  		}
  	})
  </script>
  </html>
  ```

  

## 3-8- v-cloak

> 解决闪烁问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		[v-cloak]{
			display:none;
		}
	</style>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<p v-cloak v-for="item in str">{{item}}</p>
</div>
</body>
<script>
	setTimeout(()=>{
		new Vue({
			el:"#root",
			data:{
				str:"还有三天就放假啦，好不开心呀，又不能学习了！"
			},
			methods:{
			
			}
		})
	},2000)
	
</script>
</html>
```

## 3-9- v-once v-pre

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<input v-model="str" type="text">
	<div v-pre>您可以在文本框内输入内容，下方的{{str}}会显示您输入的内容：</div>
	<div v-once>{{str}}</div>
</div>
</body>
<script>
	// v-pre:会跳过指定的区域（该区域不会对数据进行响应）
	// v-once:只会在初次对数据进行影响。如果数据再次发生改变，那么不会进行响应。
	new Vue({
		el:"#root",
		data:{
			str:"今天天气不错"
		},
		methods:{
		
		}
	})
</script>
</html>
```



# 四- 过滤器

> 过滤器不是对数据的过滤，而是对数据指定一个数据格式。本质是一个函数。

## 4-1- 基本用法

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
	<script src="./lib/moment.min.js"></script>
</head>
<body>
<div id="root">
	<h3>直接渲染</h3>
	<p>{{addTime}}</p>
	<p>{{price}}</p>
	<hr/>
	
	<h3>指定格式：不使用过滤器</h3>
	<p>{{getTime(addTime)}}</p>
	<p>{{currency(price)}}</p>
	<hr/>
	<h3>指定格式：使用过滤器</h3>
	<p>{{addTime | date}}</p>
	<!-- 要使用过滤器currency,currency的本质是一个函数，该函数接收的参数是price,返回的结果即是最终渲染的内容
	     过滤器名字后面跟上括号，括号内即是传递的数据
	 -->
	<p>{{price | currency(1,2,3,4)}}</p>
	<!--过滤器可以进行串联:可以使用多个过滤器，自左向右。
		1- 先使用date过滤器
		2- 然后再使用sliceNum的过滤器，过滤的数据指的是date过滤以后的内容
		3- 最后一个过滤器返回的值才是最终渲染的内容。
	-->
	<p>{{addTime | date | sliceNum(4)}}</p>
</div>
</body>
<script>
	// 过滤器两种场景：1- {{}}表达式  2- v-bind 表达式
	// 过滤器分为：自定义全局过滤器，自定义的局部过滤器
	// 定义过滤器在vue配置对象下的名字为filters中定义。
	// 使用时，需要将过滤器名字放置在管道符右侧
	// 过滤器函数接收的第一个参数即是要过滤的数据
	
	
	
	// 如何定义自定义局部过滤器：
	//   答：在配置对象名字为filters的属性中定义
	// 如何使用过滤器
	//   答：{{}}内使用管道符（|），管道符左侧是要过滤的数据，管道符右侧是过滤器名字
	
	new Vue({
		el:"#root",
		data:{
			addTime:Date.now()-9999999999,
			price:456.3289877
		},
		methods:{
			getTime(time){
				// return moment(time).format("YYYY-MM-DD HH:mm:ss");
				
				const timer = new Date(time);
				return timer.getFullYear()+"-"+
						(timer.getMonth()+1).toString().padStart(2,"0")+"-"+
						timer.getDate().toString().padStart(2,"0")+" "+
						timer.getHours().toString().padStart(2,"0")+":"+
						timer.getMinutes().toString().padStart(2,"0")+":"+
						timer.getSeconds().toString().padStart(2,"0");
			},
			currency(num){
				return "￥"+num.toFixed(2);
			}
		},
		filters:{
			// 自定义了一个名字为date的局部过滤器,过滤器函数接收的参数即是要过滤的数据
			// 返回的值即是最终渲染的数据
			date(time){
				console.log(time);
				const timer = new Date(time);
				return timer.getFullYear()+"-"+
						(timer.getMonth()+1).toString().padStart(2,"0")+"-"+
						timer.getDate().toString().padStart(2,"0")+" "+
						timer.getHours().toString().padStart(2,"0")+":"+
						timer.getMinutes().toString().padStart(2,"0")+":"+
						timer.getSeconds().toString().padStart(2,"0");
			},
			// 过滤器接收的第一个参数永远都是要过滤的数据。从第二个参数开始才会接收调用过滤器时传递的数据
			currency(num,a,b,c,d){
				console.log(num,a,b,c,d);
				return "￥"+num.toFixed(c);
			},
			sliceNum(str,num){
				// console.log(str);
				return str.slice(0,num);
			}
		}
	})
</script>
</html>
```

## 4-2- 将过滤器放置到外部

* lib->my-filters.js

  ```js
  export default {
  	date(time){
  		const timer = new Date(time);
  		return timer.getFullYear()+"-"+
  			(timer.getMonth()+1).toString().padStart(2,"0")+"-"+
  			timer.getDate().toString().padStart(2,"0")+" "+
  			timer.getHours().toString().padStart(2,"0")+":"+
  			timer.getMinutes().toString().padStart(2,"0")+":"+
  			timer.getSeconds().toString().padStart(2,"0");
  	},
  	currency(num){
  		return "￥"+num.toFixed(2)
  	},
  	sliceNum(str,num){
  		return str.slice(0,num);
  	}
  }
  ```

* 调用

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>Title</title>
  	<script src="lib/vue.js"></script>
  </head>
  <body>
  <div id="root">
  	<p>{{price | currency(2)}}</p>
  	<p>{{addTime | date}}</p>
  	<p>{{addTime | date | sliceNum(4)}}</p>
  </div>
  </body>
  <script type="module">
  	import filters from "./lib/my-filters.js";
  	new Vue({
  		el:"#root",
  		data:{
  			price:123.765,
  			addTime:Date.now()
  		},
  		methods:{
  		
  		},
  		filters
  	})
  </script>
  </html>
  ```

## 4-3- v-bind使用过滤器

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<img :src="imgSrc | getImg" alt="">
</div>
</body>
<script>
	// https://img30.360buyimg.com/babel/s590x470_jfs/t1/199998/2/30570/64603/63bbc5aeFaecddc7f/12a3cce5ba9079c5.jpg.avif
	new Vue({
		el:"#root",
		data:{
			imgSrc:"babel/s590x470_jfs/t1/199998/2/30570/64603/63bbc5aeFaecddc7f/12a3cce5ba9079c5.jpg.avif"
		},
		methods:{
		
		},
		filters:{
			getImg(img){
				return "https://img30.360buyimg.com/"+img;
			}
		}
	})
</script>
</html>
```





## 4-4- 全局过滤器

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<p>{{addTime | date | sliceNum(4)}}</p>
	<p>{{price | currency(2)}}</p>
	<img :src="imgSrc | getImg" alt="">
</div>
<hr/>
<div id="app">
	<p>{{upTime | date}}</p>
	<p>{{price | currency(3)}}</p>
</div>
</body>
<script>
	// 定义全局过滤器：通过Vue.filter(过滤器的名字，过滤器函数)
	Vue.filter("date",function(time){
		const timer = new Date(time);
		return timer.getFullYear()+"-"+
				(timer.getMonth()+1).toString().padStart(2,"0")+"-"+
				timer.getDate().toString().padStart(2,"0")+" "+
				timer.getHours().toString().padStart(2,"0")+":"+
				timer.getMinutes().toString().padStart(2,"0")+":"+
				timer.getSeconds().toString().padStart(2,"0");
	})
	Vue.filter("currency",function(price,num){
		return "$"+price.toFixed(num);
	})
	Vue.filter("sliceNum",function(str,num){
		return str.slice(0,num);
	})
	Vue.filter("getImg",function(str){
		return "https://img10.360buyimg.com"+str;
	})
	new Vue({
		el:"#root",
		data:{
			addTime:Date.now(),
			price:675.324,
			imgSrc:"/babel/s590x470_jfs/t1/133859/37/30908/107236/63aeb52eFbef0d8af/d4086181ae7ca0e7.png.avif"
		}
	})
	
	new Vue({
		el:"#app",
		data:{
			upTime:Date.now()-9876544321,
			price:32.45
		}
	})
</script>
</html>
```





## 4-5- 将全局过滤器放置到外部

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<p>{{addTime | date | sliceNum(4)}}</p>
	<p>{{price | currency(2)}}</p>
	<img :src="imgSrc | getImg" alt="">
</div>
<hr/>
<div id="app">
	<p>{{upTime | date}}</p>
	<p>{{price | currency(3)}}</p>
</div>
</body>
<script type="module">
	import filters from "./lib/my-filters.js";
	
	for(let key in filters){
		Vue.filter(key,filters[key]);
	}
	
	// Vue.filter("date",function(time){
	// 	const timer = new Date(time);
	// 	return timer.getFullYear()+"-"+
	// 			(timer.getMonth()+1).toString().padStart(2,"0")+"-"+
	// 			timer.getDate().toString().padStart(2,"0")+" "+
	// 			timer.getHours().toString().padStart(2,"0")+":"+
	// 			timer.getMinutes().toString().padStart(2,"0")+":"+
	// 			timer.getSeconds().toString().padStart(2,"0");
	// })
	// Vue.filter("currency",function (num){
	// 	return "￥"+num.toFixed(2)
	// })
	// Vue.filter("sliceNum",function (str,num){
	// 	return str.slice(0,num);
	// })
	// Vue.filter("getImg",function(img) {
	// 	return "https://img30.360buyimg.com/"+img;
	// })
	
	
	new Vue({
		el:"#root",
		data:{
			addTime:Date.now(),
			price:675.324,
			imgSrc:"/babel/s590x470_jfs/t1/133859/37/30908/107236/63aeb52eFbef0d8af/d4086181ae7ca0e7.png.avif"
		}
	})
	
	new Vue({
		el:"#app",
		data:{
			upTime:Date.now()-9876544321,
			price:32.45
		}
	})
</script>
</html>
```

# 五- 计算属性

> **特点**：被动计算，一次执行，具有缓存，不可异步
>
> 计算属性本质是一个函数，但是要当作属性来使用。
>
> 计算属性对应的函数是有缓存特点的。只有对响应的结果有影响的数据发生改变，那么函数才会再次执行。
>
> （计算属性的值可能依赖多个数据，只要其中一个数据发生改变，那么计算属性才会重新计算。如果依赖的数据不变，那么计算属性就不会重新计算）

## 5-1- 基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<input type="text" v-model="str">
	<input type="text" v-model="reverseCom">
	<p>直接渲染str：{{str}}</p>
	<!--直接书写逻辑，阅读不友好-->
	<p>将str倒序输出：{{str.split("").reverse().join("")}}</p>
	<!--阅读更加友好，可以复用,但是在这种操作数据相同，结果相同的场景下，如果使用多次，函数结果不会进行缓存（多次调用）-->
	<p>通过调用函数实现倒序：{{reverseStr()}}</p>
	<p>通过调用函数实现倒序：{{reverseStr()}}</p>
	<p>通过调用函数实现倒序：{{reverseStr()}}</p>
	<p>通过调用函数实现倒序：{{reverseStr()}}</p>
	<!--通过过滤器完成：阅读性很好,但是没有缓存功能。-->
	<p>通过过滤器完成：{{str | reverseStr}}</p>
	<p>通过过滤器完成：{{str | reverseStr}}</p>
	<p>通过过滤器完成：{{str | reverseStr}}</p>
	<p>通过过滤器完成：{{str | reverseStr}}</p>
	<!--通过计算属性完成：-->
	<p>通过计算属性完成：{{reverseCom}}</p>
	<p>通过计算属性完成：{{reverseCom}}</p>
	<p>通过计算属性完成：{{reverseCom}}</p>
	<p>通过计算属性完成：{{reverseCom}}</p>
</div>
</body>
<script>
	// methods(函数):拥有封装性，可以将利用的逻辑代码放置到函数中提供调用。
	// filters（过滤器）:
	//  1- 过滤器是一个特殊的函数。
	//  2- 过滤器是通过配置对象中的filters属性来设置的
	//  3- 过滤器可以设置为全局过滤器来供不同的Vue实例来使用。
	//  4- 使用过滤器时，除了需要指定过滤的数据以外，还可以额外传递参数。
	//  5- 过滤器的作用：要将某一类型的数据进行不同格式的渲染时。
	//  6- 建议在逻辑不是很复杂的情况下使用过滤器。
	//  7- 过滤器没有缓存。
	// computed（计算属性）:
	//  1- 计算属性是一个函数，但是需要将其作为属性来使用。
	//  2- 计算属性对应的函数是没有参数的，函数中的this也是指定Vue实例。
	//  3- 如果影响返回结果的数据状态（一个或多个）不变，那么计算属性对应的函数不会再次执行。
	//  4- 计算属性拥有缓存的特点，如果逻辑较复杂建议使用。
	new Vue({
		el:"#root",
		data:{
			str:"一年有365天"
		},
		methods:{
			// 将this.str进行倒序。
			reverseStr(){
				console.log("函数->reverseStr")
				return this.str.split("").reverse().join("");
			}
		},
		filters:{
			reverseStr(v){
				console.log("过滤器->reverseStr");
				return v.split("").reverse().join("");
			}
		},
		computed:{
			// reverseCom是计算属性的名字,返回结果即是要渲染的内容。
			// 计算属性的名字不允许与data中的属性名相同，否则data属性会将同名的计算属性覆盖掉。
			// 计算属性的this指向的是Vue实例
			// 创建计算属性1:支持读（获取），不支持写（设置）
			// reverseCom(){
			// 	console.log("计算属性computed->reverseCom",this)
			// 	return this.str.split("").reverse().join("");
			// }
			
			// 创建计算属性2：支持读写
			reverseCom:{
				// 读取时执行，get的返回值即是最终渲染的结果
				get(){
					console.log("revereCom-get",this);
					return this.str.split("").reverse().join("");
					
				},
				// 设置时执行。接收的参数即是修改的值
				set(v){
					// 天563有年一！
					console.log("reverseCom-set",v,this)
					this.str = v.split("").reverse().join("");
				}
			}
			
		}
	})
</script>
</html>
```

## 5-2- 购物车功能

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		[v-cloak] {
			display: none;
		}
	</style>
	<script src="lib/vue.js"></script>
</head>
<body>
<div v-cloak id="root">
	<h3>商品列表</h3>
	<div v-for="item in goodsList" :key="item.id">
		<p>商品名称：{{item.goodsName}}</p>
		<p>商品价格：{{item.goodsPrice | currency}}</p>
		<p>商品库存：{{item.storeNum}}</p>
		<p>上架时间：{{item.addTime | date}}</p>
		<button @click="joinCart(item.id)">加入购物车</button>
		<hr/>
	</div>
	<h3>购物车列表</h3>
	<template v-if="cartList.length>0">
		<p>合计：{{sumPrice | currency}}</p>
		<div v-for="item in cartList" :key="item.id">
			<p>商品名称：{{item.goodsName}}</p>
			<p>商品单价：{{item.goodsPrice | currency}}</p>
			<p>购买数量：<button @click="joinCart(item.id,false)">-</button>{{item.buyNum}} <button @click="joinCart(item.id)">+</button></p>
			<p>价格小计：{{item.goodsPrice | counter(item.buyNum) | currency}}</p>
			<p>加入购物车时间：{{item.joinTime | date}}</p>
			<hr/>
		</div>
		<p>合计：{{sumPrice | currency}}</p>
	</template>
	<div v-else>购物车空空如也！</div>
	
</div>
</body>
<script type="module">
	import filters from "./lib/my-filters.js";
	
	new Vue({
		el: "#root",
		data: {
			// 商品列表
			goodsList: [
				{
					id: 1,
					goodsName: "笔记本",
					goodsPrice: 12000,
					storeNum: 10,// 库存数量
					addTime: Date.now() - 8987766788
				},
				{
					id: 2,
					goodsName: "梨",
					goodsPrice: 34,
					storeNum: 5,// 库存数量
					addTime: Date.now() - 8687766788
				}
			],
			// 购物车列表
			cartList: []
		},
		filters: {
			...filters,
			counter(v, buyNum) {
				return v * buyNum;
			}
		},
		methods: {
			// id:商品ID,
			// isAdd:是否为增加
			joinCart(id,isAdd=true) {
				// 1- 根据ID找到商品
				const goodsInfo = this.goodsList.find(v => v.id === id);
				if(isAdd){
					
					// 2- 判断库存是否大于0
					if (goodsInfo.storeNum < 1) {
						alert("该商品库存不足");
						return;
					}
					// 2-2-1：判断购物车中是否有该商品
					// this.cartList==>[{id:商品ID,goodsName:商品名称,joinTime:加入购物车时间，goodsPrice:商品价格，buyNum:购买数量}]
					const cartInfo = this.cartList.find(v => v.id === id);
					//  2-2-1-1：有，将购物车中的购买数量加1
					if (cartInfo) cartInfo.buyNum++;
					else {
						// 2-2-1-2：无，在购物车列表数组的头部增加该商品
						this.cartList.unshift({
							id: goodsInfo.id,
							goodsName: goodsInfo.goodsName,
							goodsPrice: goodsInfo.goodsPrice,
							joinTime: Date.now(),
							buyNum: 1
						})
					}
					// 2-2-2：商品的库存减1
					goodsInfo.storeNum--;
				}else{
					// 思路：
					// 1- 找到购物车商品信息
					// 2- 将购买数量减1，将商品数量加1
					// 3- 如果购买数量等于0，删除该购物车信息
					const index = this.cartList.findIndex(v=>v.id === id);
					if(this.cartList[index].buyNum===1) this.cartList.splice(index,1);
					else this.cartList[index].buyNum--;
					// const goodsInfo = this.goodsList.find(v=>v.id === id);
					goodsInfo.storeNum++;
					
					
				}
			
				
				
			}
			
			
			
			
			// id:商品ID
			// joinCart(id) {
			// 	/*思路:加入购物车
			// 	* 1- 根据ID找到商品
			// 	* 2- 判断库存是否大于0
			// 	*   2-1- 等于0，提示库存不足
			// 	*   2-2- 大于0
			// 	*       2-2-1：判断购物车中是否有该商品
			// 	*           2-2-1-1：有，将购物车中的购买数量加1
			// 	*           2-2-1-2：无，在购物车列表数组的头部增加该商品
			// 	*       2-2-2：商品的库存减1				*
			// 	* */
			// 	// 1- 根据ID找到商品
			// 	const goodsInfo = this.goodsList.find(v => v.id === id);
			// 	// 2- 判断库存是否大于0
			// 	if (goodsInfo.storeNum < 1) {
			// 		alert("该商品库存不足");
			// 		return;
			// 	}
			// 	// 2-2-1：判断购物车中是否有该商品
			// 	// this.cartList==>[{id:商品ID,goodsName:商品名称,joinTime:加入购物车时间，goodsPrice:商品价格，buyNum:购买数量}]
			// 	const cartInfo = this.cartList.find(v => v.id === id);
			// 	//  2-2-1-1：有，将购物车中的购买数量加1
			// 	if (cartInfo) cartInfo.buyNum++;
			// 	else {
			// 		// 2-2-1-2：无，在购物车列表数组的头部增加该商品
			// 		this.cartList.unshift({
			// 			id: goodsInfo.id,
			// 			goodsName: goodsInfo.goodsName,
			// 			goodsPrice: goodsInfo.goodsPrice,
			// 			joinTime: Date.now(),
			// 			buyNum: 1
			// 		})
			// 	}
			// 	// 2-2-2：商品的库存减1
			// 	goodsInfo.storeNum--;
			//
			//
			// }
		},
		computed:{
			sumPrice(){
				// 1
				// let num =0;
				// this.cartList.forEach(item=>{
				// 	num+= item.goodsPrice*item.buyNum;
				// })
				// return num;
				
				// 2
				// return this.cartList.reduce((num,item)=>{
				// 	num+=item.goodsPrice*item.buyNum;
				// 	return num;
				// },0)
				
				return this.cartList.reduce((num,item)=>num+item.goodsPrice*item.buyNum,0)
			}
		}
	})
</script>
</html>
```

# 六- 组件

## 6-1- 创建模板

### 6-1-1- 字符串模板

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	我在马路边捡到一元钱！
</div>

</body>
<script>
	new Vue({
		// 指定挂载的位置 
		el:"#root",
		data:{
			a:1,
			b:2,
			c:3
		},
		// template指定的模板会将ID为root元素覆盖掉。
		template:`
			<div>
				<h3>通过字符串创建的模板</h3>
				<p>{{a}}</p>
				<p>{{b}}</p>
				<p>{{c}}</p>
			</div>
		`
	})
</script>
</html>
```



### 6-1-2- script

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	写上一句话
</div>
<script type="x/template" id="tp">
	<div>
		<h3>通过script创建的模板</h3>
		<p>{{a}}</p>
	</div>
</script>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			a:1,
		},
		template:"#tp"
		
		// 模板有且只能是一个根元素
		// template:`
		// 	<div v-if="a===1">
		// 		<h3>模板有且只能有一个根元素</h3>
		// 	</div>
		// 	<div v-else>
		// 		<h3>模板有且只能有一个根元素</h3>
		// 	</div>
		// `
	})
</script>
</html>
```



### 6-1-3- template

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	录屏是必须的！
</div>

<template id="one">
	<div>
		<h3>通过template标签创建的模板1</h3>
		<p>{{userName}}</p>
	</div>
</template>

<template id="two">
<div>
	<h3>通过template标签创建的模板2</h3>
	<p>{{userName}}</p>
</div>
</template>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			userName:"zhangsan"
		},
		template:"#two"
	})
</script>
</html>
```

## 6-2- 注册局部组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<my-one></my-one>
	<one></one>
	<one></one>
	<one></one>
	<one></one>
	<Two></Two>
	<Two></Two>
	<two></two>
	<two></two>
	<my-com></my-com>
	<my-com></my-com>
	<my-com></my-com>
	<my-com></my-com>
	<my-com></my-com>
	<My-Com></My-Com>


</div>
<script type="x/template" id="tp">
	<h3>我是组件Two</h3>
</script>
<template id="my">
	<div>我是组件MyCom</div>
</template>
</body>
<script>
	// 总结：
	//    建议组件的名字首字母大写，如果出现多个单词方案：
	//     使用大驼锋命名组件，在使用时需要用-分割。
	new Vue({
		el:"#root",
		// 通过配置文件中的components属性可以注册组件。
		// 属性的名字即是组件的名字
		components:{
			// 创建了一个名字one的组件,模板中指定的内容即是该组件呈现的内容
			one:{
				template:`
					<h3>我是组件one</h3>
				`
			},
			Two:{
				template:"#tp"
			},
			MyCom:{
				template:"#my"
			},
			"MyOne":{
				template:`
					<h3>我是组件My-One</h3>
				`
			}
		}
	})
</script>
</html>
```

## 6-3- 组件嵌套

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<my-one></my-one>
	<my-two></my-two>
</div>
</body>
<script>
	// vue中的组件建议使用多单词，用于区分普通标签与组件。
	// 创建组件时，如果使用了多单词：
	// 1- 使用大驼峰 MyOne,--->在使用时  <my-one></my-one>
	// 2- 使用-，组件名字小写  my-two.在使用时 <my-two></my-two>
	// 注意：组件只能够在同级别的模板中使用(template中使用的组件，只能够是同级别components中定义的组件或全局组件)
	new Vue({
		el: "#root",
		template:`
			<div>
				<h3>template模板</h3>
				<my-one></my-one>
				<my-one></my-one>
				<my-two></my-two>
				<my-two></my-two>
				<Child/>
			</div>
		`,
		components: {
			// Child可以称为是MyOne组件的子组件
			// MyOne可以称为是Child组件的父组件
			MyOne: {
				template: `
					<div>
						<h3>创建了一个名字为MyOne的组件</h3>
						<Child/>
						<Child></Child>
						<Child></Child>
						<Child></Child>
					</div>
				`,
				components:{
					Child:{
						template:`
							<div>
								<h5>我是MyOne组件下的子组件，名字为child</h5>
							</div>
						`
					}
				}
			},
			"my-two":{
				template:`
					<div>
						<h3>创建了一个名字为my-two的组件</h3>
						
					</div>
				`
			}
		}
	})
</script>
</html>
```



## 6-4- 组件示例未抽离

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<link href="style/weibo.css" rel="stylesheet" type="text/css"/>
	<script src="lib/vue.js"></script>
</head>
<body>
<div class="jyArea">
	<take-comment></take-comment>
	<comment-on></comment-on>
</div>
</body>
<script>
	new Vue({
		el: ".jyArea",
		components: {
			TakeComment: {
				template: `
					<div class="takeComment">
						<textarea name="textarea" class="takeTextField" id="tijiaoText"></textarea>
						<div class="takeSbmComment">
							<input type="button" class="inputs" value="" />
						</div>
					</div>
				`
			},
			CommentOn:{
				template:`
					<div class="commentOn">
						<div class="noContent">暂无留言</div>
						<div class="messList">
							<div class="reply">
								<p class="replyContent">内容</p>
								<p class="operation">
									<span class="replyTime">2020.03.10 01:01:01</span>
									<span class="handle">
					                    <a href="javascript:;" class="top">0</a>
					                        <a href="javascript:;" class="down_icon">9</a>
					                        <a href="javascript:;" class="cut">删除</a>
				                    </span>
								</p>
							</div>
						</div>
						<page-list></page-list>
					</div>
				`,
				components:{
					PageList:{
						template:`
							<div class="page">
								<a href="javascript:;" class="active">1</a>
								<a href="javascript:;">2</a>
								<a href="javascript:;">3</a>
							</div>
						`
					}
				}
			}
			
		}
	})
</script>
</html>
```



## 6-5- 组件示例抽离

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<link href="style/weibo.css" rel="stylesheet" type="text/css"/>
	<script src="lib/vue.js"></script>
</head>
<body>
<div class="jyArea">
	<take-comment></take-comment>
	<comment-on></comment-on>
</div>
</body>
<script>
	const TakeComment = {
		template: `
			<div class="takeComment">
				<textarea name="textarea" class="takeTextField" id="tijiaoText"></textarea>
				<div class="takeSbmComment">
					<input type="button" class="inputs" value="" />
				</div>
			</div>
		`
	};
	const PageList = {
		template:`
			<div class="page">
				<a href="javascript:;" class="active">1</a>
				<a href="javascript:;">2</a>
				<a href="javascript:;">3</a>
			</div>
		`
	}
	const CommentOn = {
		template:`
			<div class="commentOn">
				<div class="noContent">暂无留言</div>
				<div class="messList">
					<div class="reply">
						<p class="replyContent">内容</p>
						<p class="operation">
							<span class="replyTime">2020.03.10 01:01:01</span>
							<span class="handle">
			                    <a href="javascript:;" class="top">0</a>
			                        <a href="javascript:;" class="down_icon">9</a>
			                        <a href="javascript:;" class="cut">删除</a>
		                    </span>
						</p>
					</div>
				</div>
				<page-list></page-list>
			</div>
		`,
		components:{
			PageList
		}
	}
	new Vue({
		el: ".jyArea",
		components: {
			TakeComment,
			CommentOn
		}
	})
</script>
</html>
```

## 6-6- 将组件定义在外部

* components->PageList.js

  ```js
  const template = `
  	<div class="page">
  		<a href="javascript:;" class="active">1</a>
  		<a href="javascript:;">2</a>
  		<a href="javascript:;">3</a>
  	</div>
  `;
  const PageList = {
  	template
  }
  export default PageList;
  ```

  

* components->CommentOn.js

  ```js
  import PageList from "./PageList.js";
  const template = `
  	<div class="commentOn">
  		<div class="noContent">暂无留言</div>
  		<div class="messList">
  			<div class="reply">
  				<p class="replyContent">内容</p>
  				<p class="operation">
  					<span class="replyTime">2020.03.10 01:01:01</span>
  					<span class="handle">
  	                    <a href="javascript:;" class="top">0</a>
  	                        <a href="javascript:;" class="down_icon">9</a>
  	                        <a href="javascript:;" class="cut">删除</a>
                      </span>
  				</p>
  			</div>
  		</div>
  		<page-list></page-list>
  	</div>
  `;
  const CommentOn = {
  	template,
  	components:{
  		PageList
  	}
  }
  export default CommentOn;
  ```

  

* components->TakeComment.js

  ```js
  const template= `
  	<div class="takeComment">
  		<textarea name="textarea" class="takeTextField" id="tijiaoText"></textarea>
  		<div class="takeSbmComment">
  			<input type="button" class="inputs" value="" />
  		</div>
  	</div>
  `
  const TakeComment = {
  	template
  };
  export default TakeComment;
  ```

* html

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>Title</title>
  	<link href="style/weibo.css" rel="stylesheet" type="text/css"/>
  	<script src="lib/vue.js"></script>
  </head>
  <body>
  <div class="jyArea">
  	<take-comment></take-comment>
  	<comment-on></comment-on>
  </div>
  </body>
  <script type="module">
  	import TakeComment from "./components/TakeComment.js";
  	import CommentOn from "./components/CommentOn.js";
  	new Vue({
  		el: ".jyArea",
  		components: {
  			TakeComment,
  			CommentOn
  		}
  	})
  </script>
  </html>
  ```

## 6-7- 深入理解组件（了解）

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click="run">Vue实例->点我</button>
	<com-one></com-one>
	<Two></Two>
	<Three/>
</div>
</body>
<script>
	// 注意：组件中只能够使用自身定义methods,filters,computed,data
	// 1- Vue实例的隐式原型指定的是Vue显示原型
	// 2- VueComponent的隐式原型是Vue实例==>VueComponent的隐式原型下的隐式原型指向的是Vue显示原型。
	// 3- 组件的本质是通过Vue.extend创造的。
	Vue.prototype.$userName = "zhangsan";
	
	const Two = Vue.extend({
		template:`
			<h3>Two</h3>
		`
	});
	console.log(Two);
	
	const vm = new Vue({
		el:"#root",
		methods:{
			run(){
				console.log("vue->methods->run",this===vm,this.__proto__ === Vue.prototype,this.$userName);
			}
		},
		components:{
			ComOne:{
				template:`
					<button @click="run">组件-->点我</button>
				`,
				methods:{
					run(){
						console.log("vueComponent->run",this.__proto__.__proto__ === Vue.prototype,this.$userName);
					}
				}
			},
			Two,
			Three:Vue.extend({
				template:`
					<h3>Three</h3>
				`
			})
		}
	})
</script>
</html>
```



## 6-8- 组件中使用data

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<my-one></my-one>
</div>
</body>
<script>
	// 注意：组件中的data必须写成一个函数，函数必须要有返回值，返回值是一个对象(数据)
	new Vue({
		el:"#root",
		components:{
			MyOne:{
				data(){
					return {
						num:0
					}
				},
				template:`
					<button>{{num}}</button>
				`
			}
		}
	})
</script>
</html>
```



## 6-9- 为什么data需要写成函数-加1运算

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<h3>保证唯一性</h3>
	<com-one></com-one>
	<com-one></com-one>
	<com-one></com-one>
	<com-one></com-one>
	<com-one></com-one>
	<com-one></com-one>
	<com-one></com-one>
	<h3>数据不唯一</h3>
	<com-two></com-two>
	<com-two></com-two>
	<com-two></com-two>
	<com-two></com-two>
	<com-two></com-two>
</div>
</body>
<script>
	// 组件可以被多次使用，将数据状态设置为工厂函数：
	// 1- 可以保证数据的唯一性。
	// 2- 可以在返回数据之前可以写逻辑
	const data = {
		num:100
	}
	new Vue({
		el:"#root",
		components:{
			ComOne:{
				data(){
					return {
						num:0
					}
				},
				template:`
					<button @click="num++">{{num}}</button>
				`
			},
			"com-two":{
				data(){
					return data;
				},
				template:`
					<button @click="num++">{{num}}</button>
				`
			}
		}
	})
</script>
</html>
```

## 6-10-动态组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click="changeIndex">切换</button>
	<h3>方案二：使用动态组件</h3>
	<component :is="comArr[index]"></component>
	<hr/>
	<h3>方案一</h3>
	<com-one v-if="index===0"></com-one>
	<com-two v-else-if="index===1"></com-two>
	<com-three v-else-if="index===2"></com-three>
	<com-four v-else-if="index===3"></com-four>
</div>
</body>
<script>
	// 动态组件：组件可以根据is属性发生变化，is属性的值即是组件名
	new Vue({
		el:"#root",
		data:{
			index:0,
			comArr:["com-one","com-two","com-three","com-four"]
		},
		methods:{
			changeIndex(){
				if(++this.index>3) this.index = 0;
			}
		},
		components:{
			"com-one":{
				template:`
					<div style="width:300px;height:300px;background:red;">1</div>
				`
			},
			"com-two":{
				template:`
					<div style="width:300px;height:300px;background:yellow;">2</div>
				`
			},
			"com-three":{
				template:`
					<div style="width:300px;height:300px;background:blue;">3</div>
				`
			},
			"com-four":{
				template:`
					<div style="width:300px;height:300px;background:green;">4</div>
				`
			}
		}
	})
</script>
</html>
```

## 6-11- 组件传递参数---important

### 6-11-1- 父子传递参数

#### 6-11-1-1- 基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<com-one age="1" :user-name="zhangsan"></com-one>
</div>
</body>
<script>
	// 注意1：属性不允许修改,如果想尝试修改，可以将属性作为data的属性值
	// 注意2：属性不要与data中的数据属性名字相同。
	// 注意3：传递的属性名全部小写，如果属性有多个单词，单词之间使用-分割，接收时可以使用驼峰方法
	new Vue({
		el:"#root",
		data:{
			zhangsan:"lisi"
		},
		components:{
			ComOne:{
				data(){
					return {
						num:this.age
					}
				},
				// 接收名字为age的属性
				props:["age","userName"],
				template:`
					<div>
						<h3>ComOne</h3>
						<p>age:{{age}}</p>
						<p>userName:{{userName}}</p>
						<button @click="num++">{{num}}</button>
					</div>
				`
			}
		}
	})
</script>
</html>
```



#### 6-11-1-2- 限制类型

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<com-one user-name="zhangsan" age="12" hobby="学习"></com-one>
	<hr/>
	<com-two :user-name="userName" :age="age" :hobby="hobby"></com-two>
	<hr/>
	<com-three :user-name="userName" :arr="[100]" :obj="info" :age="age" ></com-three>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			userName:"lisi",
			age:100,
			hobby:"阅读",
			info:{
				userName:"lisi",
				age:12
			}
		},
		components:{
			ComOne:{
				// 1- props的值是一个数组，数组的元素即是接收属性的名字。
				props:["userName","age","hobby"],
				template:`
					<div>
						<p>userName:{{userName}}</p>
						<p>age:{{age}}</p>
						<p>hobby:{{hobby}}</p>
					</div>
				`
			},
			"com-two":{
				// 2- props可以设置为简单对象，用于限制类型
				// String,Number,Array,Function,Promise,Date
				props:{
					userName:String,
					age:Number,
					hobby:String
				},
				template:`
					<div>
						<p>userName:{{userName}}</p>
						<p>age:{{age}}</p>
						<p>hobby:{{hobby}}</p>
					</div>
				`
			},
			"com-three":{
				// 3- 可以将props设置为复杂对象，用于限制类型以及默认值以及是否必须。
				props:{
					userName:{
						type:String
					},
					age:{
						type:Number,// 限制类型为Number
						required:true
					},
					hobby:{
						type:String,
						default:"下棋"
					},
					obj:{
						type:Object,
						default(){
							return {
								a:1,
								b:2
							}
						}
					},
					arr:{
						type:Array,
						default(){
							return [1,2,3,4]
						}
					}
					
				},
				template:`
					<div>
						<p>userName:{{userName}}</p>
						<p>age:{{age}}</p>
						<p>hobby:{{hobby}}</p>
						<p>obj:{{obj}}</p>
						<p>arr:{{arr}}</p>
					</div>
				`
			}
		}
	})
</script>
</html>
```

#### 6-11-1-3- 传递参数示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<book-list :info="wuxia"></book-list>
	<hr/>
	<book-list :info="yanqing"></book-list>
	<hr/>
	<book-list :info="xuanhuan"></book-list>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			wuxia:{
				type:"武侠小说",
				bookList:[
					{
						id:1,
						bookName:"天龙八部",
						author:"金庸"
					},{
						id:2,
						bookName: "圆月弯刀",
						author: "古龙"
					}
				]
			},
			yanqing:{
				type:"言情小说",
				bookList:[
					{
						id:1,
						bookName:"还珠格格",
						author:"琼瑶"
					},{
						id:2,
						bookName: "像雾像雨又像风",
						author: "琼瑶"
					}
				]
			},
			xuanhuan:{
				type:"玄幻小说",
				bookList:[
					{
						id:1,
						bookName:"斗罗大陆",
						author:"唐家三少"
					},{
						id:2,
						bookName: "斗破苍穹",
						author: "天蚕土豆"
					}
				]
			}
		},
		components:{
			"book-list":{
				// 1
				// props:{
				// 	info:{
				// 		type:Object,
				// 		required:true
				// 	}
				// },
				
				// 2
				// props:["info"],
				
				// 3
				props:{
					info:Object,
				},
				template:`
					<div>
						<h3>{{info.type}}</h3>
						<div v-for="item in info.bookList" :key="item.id">
							{{item.bookName | book}}----{{item.author}}
						</div>
					</div>
				`,
				filters:{
					book(v){
						return "《"+v+"》"
					}
				}
			}
		}
	})
</script>
</html>
```

### 6-11-2- 子父传递参数

#### 6-11-2-1- 通过函数传递数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click="changeIsShow(!isShow)">显示与隐藏</button>
	<com-one :change-is-show="changeIsShow" v-show="isShow"></com-one>
</div>
</body>
<script>
	// 子向父通过函数进行数据的传递：
	// 1- 父向子传递一个函数
	// 2- 子组件中调用函数，并选择是否传递参数实现了子组件向父组件传参。
	new Vue({
		el:"#root",
		methods:{
			changeIsShow(isShow){
				this.isShow = isShow;
			}
		},
		data:{
			isShow:true
		},
		components:{
			ComOne:{
				props:{
					changeIsShow:Function
				},
				template:`
					<div style="width:300px;height:300px;background:red;">
						<button @click="changeIsShow(false)">通过子组件按钮进行隐藏</button>
					</div>
				`
			}
		}
	})
</script>
</html>
```



#### 6-11-2-2- 通过自定义事件传递数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click="changeIsShow(!isShow)">显示与隐藏</button>
	<!--创建了一个名字为abc的自定义事件,事件处理函数为changeIsShow-->
	<com-one @abc="changeIsShow" @changeIsShow="changeIsShow" v-show="isShow"></com-one>
</div>
</body>
<script>
	// 自定义事件：事件的名字是自定义的
	// 1- 定义：向子组件以属性的形式传递自定义事件
	// 2- 触发：在子组件中不需要通过props来接收（不需要设置props)
	//         通过this.$emit(自定义事件的名字，参数1，参数2)来触发
	// 注意：自定义事件的名字可以使用驼峰命名，但是触发时需要小写（因为模板在编译的过程中会将事件转为小写）
	new Vue({
		el:"#root",
		methods:{
			changeIsShow(isShow,a,b,c,d) {
				console.log(isShow,a,b,c,d);
				this.isShow = isShow;
			}
		},
		data:{
			isShow:true
		},
		components:{
			"com-one":{
				methods:{
					fn(){
						this.$emit("changeisshow",false);
					}
				},
				template:`
					<div style="width:500px;height:200px;background:green;">
						<button @click="$emit('abc',false,1,2,3,4)">子组件隐藏-调用自定义事件abc</button>
						<button @click="$emit('changeisshow',false,1,2,3,4)">子组件隐藏-调用自定义事件changeIsShow</button>
						<button @click="fn">子组件隐藏-通过方法调用自定义事件</button>
					</div>
				`
			}
		}
	})
</script>
</html>
```



#### 6-11-2-3- 通过sync传递数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click="changeIsNum(100)">{{num}}</button>
	<button @click="num=200">{{num}}</button>
	<hr/>
	<com-one :num="num" :change-is-num="changeIsNum"></com-one>
	<com-two :num="num" @changeIsNum="changeIsNum"></com-two>
	<com-three :num="num" @changeIsNum="n=>num=n"></com-three>
	<com-four :num="num" @update:num="n=>num=n"></com-four>
	<!--上方代码可以简写为（语法糖）：
		sync修饰符干了二件事：
		1- 向组件传递了属性num
		2- 向组件传递了自定义事件update:num
	-->
	<com-four :num.sync="num"></com-four>
	
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			num:0
		},
		methods:{
			changeIsNum(num){
				this.num = num;
			}
		},
		components:{
			ComOne:{
				props:["num","changeIsNum"],
				template:`
					<div>
						<button @click="changeIsNum(300)">ComOne:{{num}}</button>
					</div>
				`
			},
			ComTwo:{
				props:["num"],
				template:`
					<div>
						<button @click="$emit('changeisnum',400)">ComTwo:{{num}}</button>
					</div>
				`
			},
			ComThree:{
				props:["num"],
				template:`
					<div>
						<button @click="$emit('changeisnum',500)">ComThree:{{num}}</button>
					</div>
				`
			},
			ComFour:{
				props:["num"],
				template:`
					<button @click="$emit('update:num',600)">ComFour:{{num}}</button>
				`
			}
			
		}
	})
</script>
</html>
```



### 6-11-3- 非父子传递参数

#### 6-11-3-1- 状态提升

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<One :num.sync="num"></One>
	<Two :num="num"></Two>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			num:100
		},
		components:{
			One:{
				props:["num"],
				template:`
					<button @click="$emit('update:num',num+1)">{{num}}</button>
				`
			},
			Two:{
				props:["num"],
				template:`
					<button>{{num}}</button>
				`
			}
		}
	})
</script>
</html>
```



#### 6-11-3-2- $emit-$on-$once-$off

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!--触发名字为one的订阅者
		$emit:第一个参数是订阅者的名字，从第二个参数开始即是向订阅者发送参数。
	-->
	<button @click="$emit('one',1,2,3,4)">{{num}}</button>
	<hr/>
	<One/>
</div>
</body>
<script>
	// 在Vue实例中定义的订阅者，只能够通过在该Vue实例中的发布者去操作。
	// 在VueComponment实例中定义的订阅者，只能够通过在该VueComponent实例中的发布者去操作。
	// $on：定义订阅者，可以执行多次。
	// $emit：触发订阅者（发布者）
	// $off：关闭订阅者
	// $once:生成的订阅信息只会执行一次
	new Vue({
		el:"#root",
		data:{
			num:0
		},
		components:{
			One:{
				template:`
					<div>
						<h3>One组件</h3>
						<button @click="$emit('one',10,20,30,40)">触发订阅者one</button>
					</div>
				`,
				mounted(){
					this.$on("one",(a,b,c,d)=>{
						console.log("组件->one",a,b,c,d);
					})
				}
			}
		},
		mounted(){
			// 相当于React-->componentDidMount
			// console.log("mounted",document.querySelector("button").innerText);
			
			// 创建订阅者:创建了一个名字为one的订阅者，一旦发布者发布消息以后会执行第二个参数（函数）
			this.$on("one",(a,b,c,d)=>{
				this.$off("one");
				console.log("one1",a,b,c,d,this.num)
			})
			
			// 该订阅者只会触发一次。
			this.$once("one",function(a,b,c,d){
				console.log("one2",a,b,c,d,this.num)
			})
			
			
		}
	})
</script>
</html>
```



#### **6-11-3-3- 全局事件总线（做项目时不可使用此方法）**

> 全局事件总线是组件之间进行传递参数的一种方式，适用于不同组件（非父子）的参数传递

* 全局事件总线1

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>Title</title>
  	<script src="lib/vue.js"></script>
  </head>
  <body>
  <div id="root">
  	<button @click="changeNum(num+1)">1-{{num}}</button>
  	<button @click="num++">2-{{num}}</button>
  	<button @click="busChangeNum">3-{{num}}</button>
  	<hr/>
  	<One :num="num"></One>
  	<Two :num="num"></Two>
  </div>
  </body>
  <script>
  	const bus = new Vue();
  	new Vue({
  		el:"#root",
  		data:{
  			num:100
  		},
  		components:{
  			One:{
  				props:["num"],
  				methods:{
  					changeNum(){
  						bus.$emit("one",this.num+1);
  					}
  				},
  				template:`
  					<button @click="changeNum">{{num}}</button>
  				`
  			},
  			Two:{
  				props:["num"],
  				methods:{
  					changeNum(){
  						bus.$emit("one",this.num+2);
  					}
  				},
  				template:`
  					<button @click="changeNum">{{num}}</button>
  				`
  			}
  		},
  		methods:{
  			changeNum(num){
  				this.num = num;
  			},
  			busChangeNum(){
  				bus.$emit("one",this.num+1);
  			}
  			
  		},
  		mounted(){
  			bus.$on("one",(num)=>{
  				this.num = num;
  				console.log("one",num)
  			})
  		}
  	})
  </script>
  </html>
  ```

* 全局事件总线2

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>Title</title>
  	<script src="lib/vue.js"></script>
  </head>
  <body>
  <div id="root">
  	<button @click="$bus.$emit('one',num+1)">{{num}}</button>
  	<hr/>
  	<One :num="num"></One>
  	<Two :num="num"/>
  </div>
  </body>
  <script>
  	Vue.prototype.$userName = "zhangsan";
  	Vue.prototype.$bus = new Vue();
  	new Vue({
  		el:"#root",
  		data:{
  			num:100
  		},
  		methods:{
  			changeNum(){
  				this.num +=1;
  				console.log("changeNum",this.$userName)
  			}
  		},
  		mounted(){
  			this.$bus.$on("one",(num)=>{
  				this.num = num;
  				console.log("one")
  			})
  		},
  		components:{
  			One:{
  				props:["num"],
  				template:`
  					<button @click="$bus.$emit('one',num+2)">{{num}}</button>
  				`
  			},
  			Two:{
  				props:["num"],
  				template:`
  					<button @click="$bus.$emit('one',num+2)">{{num}}</button>
  				`
  			}
  		}
  	})
  </script>
  </html>
  ```

## 6-12- 为组件增加事件(了解)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<One @click.native.once="fn"/>
</div>
</body>
<script>
	// native修饰符：可以为组件增加事件
	new Vue({
		el:"#root",
		methods:{
			fn(){
				console.log("fn");
			}
		},
		components:{
			One:{
				template:`
					<div style="width:100px;height:100px;background:red"></div>
				`
			}
		}
	})
</script>
</html>
```



## 6-13- 注册全局组件

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<One></One>
	<Two></Two>
</div>
<div id="app">
	<One></One>
	<Two></Two>
</div>
</body>
<script>
	
	// 全局组件1
	const One = Vue.extend({
		template:`
			<button>我是组件One中的一个按钮
				<Two/>
			</button>
		`
	})
	
	// 全局组件2:第一个参数是组件的名字，第二个参数是组件的配置项
	Vue.component('Two',{
		template:`fdjfdfj 
		
			<div>
				<h3>Two</h3>
			</div>
		`
	})
	new Vue({
		el:"#root",
		components:{
			One
		}
	})
	new Vue({
		el:"#app",
		components:{
			One
		}
	})
	
	
	
	
	
	
	
	
	
	
	// 以下创建的是局部组件
	// new Vue({
	// 	el:"#root",
	// 	components:{
	// 		One:{
	// 			template:`
	// 				<div><h3>One</h3><Child/></div>
	// 			`,
	// 			components:{
	// 				Child:{
	// 					template:`<h3>我还是一个孩子</h3>`
	// 				}
	// 			}
	// 		},
	// 		Two:{
	// 			template:`
	// 				<div><h3>Two</h3></div>
	// 			`
	// 		}
	// 	}
	// })
</script>
</html>
```



# 七- ref

## 7-1- 与普通标签结合使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<div ref="myDiv" id="myDiv">大家好，我是DIV</div>
	<input ref="userName" name="userName" type="text">
	<button ref="myBtn" @click="fn">点我</button>
</div>
</body>
<script>
	// ref与普通元素结合使用可以获取真实DOM
	// 1- 为元素增加ref属性，值是字符串
	// 2- 通过实例下的$refs属性去获取DOM元素
	new Vue({
		el:"#root",
		data:{
		
		},
		methods:{
			fn(e){
				// console.log(e.target.innerText);
				// console.log(document.querySelector("button").innerText);
				// console.log(e.target === document.querySelector("button"));// true
				// console.log(document.querySelector("#myDiv").innerText)
				// console.log(document.querySelector("input[name=userName]").value)
				// console.log(this.$refs.myDiv === document.querySelector("#myDiv"));// true
				// console.log(this.$refs.myDiv.innerText);
				// console.log(this.$refs.userName.value);
				console.log(this.$refs.myBtn.innerText)
			}
		}
	})
</script>
</html>
```



## 7-2- 与v-for指令结合使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<p ref="one">1</p>
	<p ref="one">2</p>
	<hr/>
	<div ref="two" v-for="item in num" :key="item">{{item}}</div>
	<button @click="fn">点我</button>
</div>
</body>
<script>
	// 注意：如果ref属性值有重复，那么最后出现的会把之前的覆盖掉。
	// 注意：如果ref与v-for结合使用，得到的是一个数组。数组的长度与遍历的次数相同
	new Vue({
		el:"#root",
		data:{
			num:10
		},
		methods:{
			fn(){
				// console.log(this.$refs.one.innerText);// 2
				console.log(this.$refs.two[0].style.background = "red")
			}
		}
	})
</script>
</html>
```



## 7-3- 与组件结合使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click="fn">点我</button>
	<Child ref="child"></Child>
</div>
</body>
<script>
	// 如果ref与组件结合使用，通过this.$refs获取到的即是组件实例。
	new Vue({
		el:"#root",
		methods:{
			fn(){
				console.log(this.$refs.child.num);
				this.$refs.child.changeNum(100);
			}
		},
		components:{
			Child:{
				data(){
					return {
						num:1
					}
				},
				methods:{
					changeNum(n=1){
						this.num +=n;
					}
				},
				template:`
					<button @click="changeNum(10)">{{num}}</button>
				`
			}
		}
	})
</script>
</html>
```



# 八- 自定义指令

> 使用指令： v-指令名字：指令的参数.修饰符=值

## 8-1- 基本用法

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<div v-color:background.my="one">正在学习指令</div>
	<div v-color:color.lazy.my="'red'">正在学习指令</div>
	<div v-green>green</div>
	<div v-red>red</div>
	<div v-color:background = "'green'">green</div>
	<div v-color:background = "'red'">red</div>
	
	<div v-book>天龙八部</div>
</div>
</body>
<script>
	// 指令分为内部指令，自定义指令。自定义指令在使用范围上分为：局部指令与全局指令。
	// 指令的特点：是一个特殊的属性（以v-开头）
	// 1- 无值： v-else  v-pre v-once v-cloak
	// 2- 有值(value)： v-if="xxx"   v-else-if="xxx" v-show="xxx" v-text="xxx" v-html="xxx"
	// 3- 有参数（arg）：v-bind:xxx   v-model:xxxx v-on:xxx
	// 4- 有修饰符：（modifier) v-model.number @click.prevent
	new Vue({
		el:"#root",
		data:{
			one:"green"
		},
		// 通过该对象可以设置自定义指令
		directives:{
			// 定义了一个名字为color的指令。
			color(el,binds,vNode){
				// el:指令所在的真实DOM
				// vNode:指令所在的虚拟DOM
				// binds:指令相关信息，类型是一个对象
				//    expression:"one"   ---->指令右侧的内容
				//    name:"color"------------->指令的名字
				//    rawName:"v-color:background.lazy.my-> = 左侧内容
				//    value:"green"-------->前缀-v+指令名字
				//    modifiers:{lazy: true, my: true}--->修饰符
				//    arg:background"----->参数
				
				if(binds.modifiers.lazy){
					setTimeout(()=>{
						el.style[binds.arg] = binds.value;
					},1000)
				}else
					el.style[binds.arg] = binds.value;
			},
			green(el){
				el.style.background="green";
			},
			red(el){
				el.style.background = "red";
			},
			book(el){
				el.innerText = "《"+el.innerText+"》";
			}
		}
	})
</script>
</html>
```

## 8-2- 钩子函数bind

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<p v-color="'red'" @click="num++">你现在过的还好吗？{{num}}</p>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			num:100
		},
		directives:{
			// 1- 指令的值是一个函数
			// 指令与视图建立关系后执行,如果数据发生改变，会再次执行。
			// color(el,binding,vNode){
			// 	console.log("color");
			// 	// console.log(binding.value,document.querySelector("p").innerText);
			// 	el.style.color = binding.value;
			// }
			
			// 2- 指令的值可以是一个对象
			color:{
				// 指令与视图建立关系后执行一次，数据发生改变不会再次执行。
				bind(el,binding){
					// console.log(el,binding);
					console.log("color");
					el.style.color= binding.value;
				}
			}
		}
	})
</script>
</html>
```



## 8-3- 钩子函数inserted

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<p @click="num++">{{num}}</p>
	<!--文本框获取焦点-->
<!--	<input autofocus type="text">-->
	
	<!--通过指令获取焦点，起到更好的兼容作用-->
	<input v-focus type="text">
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			num:1
		},
		directives:{
			// focus(el){
			// 	console.log("focus",document.querySelector("p").innerText);
			// 	// 由于模板未编译完成（未挂载完成），所以focus方法最终无效。
			// 	// el.focus();
			// 	setTimeout(()=>{
			// 		console.log("focus",document.querySelector("p").innerText);
			// 		el.focus();
			// 	})
			// }
			
			focus:{
				// 挂载完成以后（视图与数据绑定完成后）,执行一次。
				inserted(el){
					// console.log("inserted",document.querySelector("p").innerText)
					el.focus();
				}
				
			}
		}
	})
</script>
</html>
```



## 8-4- 全局自定义指令

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<h3>实例模板</h3>
	<input type="text" v-model="bookName">
	<p v-book>{{bookName}}</p>
	<P>我今天正在学习：{{bookName | book}}</P>
	<p v-book2="bookName">4568790</p>
	<hr/>
	<One></One>
</div>
</body>
<script>
	// 如果定义的全局指令的名字与局部指令的名字相同，以局部指令为准。
	// 定义全局指定1
	// 第一个参数即是指令的名字
	// Vue.directive("book",function(el){
	// 	el.innerText = "《"+el.innerText+"》!"
	// })
	
	// 定义全局指令2
	Vue.directive("book",{
		bind(el){
			el.innerText = "《"+el.innerText+"》"
		}
	})
	
	new Vue({
		el:"#root",
		data:{
			bookName:"21天精通JAVASCRIPT"
		},
		filters:{
			book(v){
				return "《"+v+"》"
			}
		},
		directives:{
			// book(el){
			// 	el.innerText = "《"+el.innerText+"》"
			// },
			book2(el,binding){
				el.innerText = "《"+binding.value+"》"
			}
		},
		components:{
			One:{
				data(){
					return {
						bookName:"one"
					}
				},
				template:`
					<p v-book>{{bookName}}</p>
				`
			}
		}
	})
</script>
</html>
```



## 8-5- 指令应用-debounce防抖

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!--实现防抖：未通过指令-->
	<input placeholder="实现防抖：未通过指令" @input="search" type="text">
	<!--实现防抖：通过指令-->
	<input v-debounce="search2" placeholder="实现防抖：通过指令" type="text">
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			timer:null
		},
		methods:{
			search(e){
				if(this.timer) clearTimeout(this.timer);
				this.timer = setTimeout(()=>{
					console.log("search",e.target.value);
				},500);
			},
			search2(e){
				console.log("search2",e.target.value)
			}
		},
		directives:{
			debounce:{
				bind(el,binding){
					let timer = null;
					let t = 500;
					if(binding.arg) t = binding.arg/1;
					el.addEventListener("input",function(event){
						if(timer) clearTimeout(timer);
						timer = setTimeout(()=>{
							binding.value(event);
						},t)
					})
				}
			}
		}
	})
</script>
</html>
```

# 九- 侦听

问题：methods、watch、computed它们之间的差异与区别是什么？

>methods：主动调用、每次触发、没有缓存、可以异步
>
>watch：主动监控、立即监控、深度监控、可以异步
>
>computed：被动计算、一次触发、具有缓存，不可异步

## 9-1- 基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<!--1- 侦听数字-->
	<button @click="num++">{{num}}</button>
	<input v-model.number="num" type="text">
	<div>{{num}}---{{a}}</div>
	<hr/>
	<!--2- 侦听obj.userName	-->
	<input v-model="obj.userName" type="text">
	<div>{{obj.userName}}</div>
	<hr/>
	<!--3- 侦听obj下的属性-->
	<button @click="obj={userName:'lisi',age:18}">点我</button>
	<input v-model="obj.userName" placeholder="obj.userName" type="text">
	<input v-model="obj.age" placeholder="obj.age" type="text">
	<div>
		<p>userName:{{obj.userName}}</p>
		<p>age:{{obj.age}}</p>
	</div>
	<hr/>
	<button @click="fn">{{arr}}</button>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			num:0,
			a:0,
			obj:{
				userName:"zhangsan",
				age:12
			},
			arr:[1,2,3,4]
		},
		methods:{
			// 操作数组：如果根据下标更改值不支持双向绑定,不支持侦听。
			fn(){
				// this.arr.push(5);
				// this.arr.unshift(0);
				
				// this.arr[0] = 100;
				// 解决方案1：更改数组的引用地址
				// this.arr = this.arr.map((item,index)=>{
				// 	if(index===0) item=100;
				// 	return item;
				// })
				
				// const copyArr = [...this.arr];
				// copyArr[0] = 99;
				// this.arr = copyArr;
				
				// 解决方案2：通过官方提供的this.$set方案
				// 第一个参数是要修改的数组，第二个参数是修改的下标，第三个参数是要修改的值。
				this.$set(this.arr,0,88);
			}
		},
		// 通过watch增加侦听
		watch:{
			// 1- 侦听num-->函数
			// 侦听名字为num的数据，当num发生改变时会执行。
			// 特点1：接收两个参数- newValue(更改后的值),oldValue（更改前的值）
			// 特点2：this为Vue实例
			// 特点3：支持异步
			// num(newValue,oldValue){
			// 	// console.log("num",newValue,oldValue,this)
			// 	setTimeout(()=>{
			// 		this.a = newValue+1;
			// 	})
			// }
			
			// 2- 侦听num--->对象
			// immediate的作用：handler会在数据变化后执行，使用Vue实例调用一次（立即调用）
			num:{
				handler(newValue,oldValue){
					this.a = newValue+1;
					// console.log("num",newValue,oldValue,this);
				},
				immediate:true// 立即调用。
			},
			
			
			// 3- 侦听obj->userName
			// 3-1
			// "obj.userName"(newValue,oldValue){
			// 	console.log(newValue,oldValue)
			// }
			
			// 3-2
			// "obj.userName":{
			// 	handler(newValue,oldValue){
			// 		console.log(newValue,oldValue);
			// 	}
			// }
			
			
			// 4- 侦听obj下的属性发生改变
			// 4-1- 注意：如果侦听的是引用类型，只有引用类型的引用地址发生改变才会执行。
			// obj(newValue,oldValue){
			// 	console.log("obj",newValue,oldValue);
			// }
			
			// 4-2- 深度侦听:当对象中的属性发生改变即可侦听到
			obj:{
				handler(newValue,oldValue){
					console.log("obj",newValue===oldValue)
				},
				deep:true// 实现深度侦听
			},
			
			// 5- 侦听数组
			arr(newValue,oldValue){
				console.log("arr",newValue===oldValue)
			}
			
			// arr:{
			// 	handler(newValue,oldValue){
			// 		console.log("arr",newValue===oldValue)
			// 	},
			// 	deep:true// 实现深度侦听
			// }
			//
			
		}
		
	})
	
</script>
</html>
```

## 9-2- 通过侦听完成应用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		*{
			padding:0;
			margin:0;
		}
		#root button{
			padding:5px;
			margin:5px;
		}
		#root button.active{
			background:red;
		}
	</style>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click="index=i" :class="{active:index===i}" v-for="(item,i) in newsInfo" :key="i">{{item.type}}</button>
	<div v-for="item in newsList" :key="'info'+item.id">
		{{item.newsTitle}}
	</div>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			index:0,
			newsList:[],
			newsInfo:[
				{
					type:"体育",
					newsList:[
						{
							id:1,
							newsTitle:"体育1"
						},
						{
							id:2,
							newsTitle:"体育2"
						}
					]
				},
				{
					type:"娱乐",
					newsList:[
						{
							id:11,
							newsTitle:"娱乐1"
						},
						{
							id:12,
							newsTitle:"娱乐2"
						}
					]
				},
				{
					type:"财经",
					newsList:[
						{
							id:21,
							newsTitle:"财经1"
						},
						{
							id:22,
							newsTitle:"财经2"
						}
					]
				}
			]
		},
		methods:{
		
		},
		watch:{
			index:{
				handler(newsValue){
					this.newsList = this.newsInfo[newsValue].newsList;
				},
				immediate: true
			}
		}
	})
</script>
</html>
```



## 9-3- 通过计算属性完成应用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		*{
			padding:0;
			margin:0;
		}
		#root button{
			padding:5px;
			margin:5px;
		}
		#root button.active{
			background:red;
		}
	</style>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click="index=i" :class="{active:index===i}" v-for="(item,i) in newsInfo" :key="i">{{item.type}}</button>
	<div v-for="item in newsList" :key="'info'+item.id">
		{{item.newsTitle}}
	</div>
</div>
</body>
<script>
	// 计算属性与侦听有什么区别？
	// 1- 一个叫侦听（watch）,一个叫计算属性(computed)
	// 2- 侦听的是data下的数据是否发生改变，（影响多个值），计算属性受多个值的影响 。
	// 3- 侦听没有缓存，计算属性有缓存
	// 4- 侦听不需要返回值，计算属性需要返回值。
	// 5- 侦听支持异步,计算异性不支持异步
	new Vue({
		el:"#root",
		data:{
			index:0,
			newsInfo:[
				{
					type:"体育",
					newsList:[
						{
							id:1,
							newsTitle:"体育1"
						},
						{
							id:2,
							newsTitle:"体育2"
						}
					]
				},
				{
					type:"娱乐",
					newsList:[
						{
							id:11,
							newsTitle:"娱乐1"
						},
						{
							id:12,
							newsTitle:"娱乐2"
						}
					]
				},
				{
					type:"财经",
					newsList:[
						{
							id:21,
							newsTitle:"财经1"
						},
						{
							id:22,
							newsTitle:"财经2"
						}
					]
				}
			]
		},
		computed:{
			newsList(){
				return this.newsInfo[this.index].newsList;
				// setTimeout(()=>{
				// 	return this.newsInfo[this.index].newsList;
				// })
			
			}
		}
	})
</script>
</html>
```



## 9-4- 搜索示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<input v-model="keyword" type="text">
	<p v-show="keyword.length>0 && item.includes(keyword)" v-for="(item,index) in arr" :key="index">{{item}}</p>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			keyword:"",
			arr:["zhangsan","lisi","wangwu","zhaoliu","yanqi","shenba"]
		}
	})
</script>
</html>
```



## 9-5- 通过侦听完成搜索

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<input v-model="keyword" type="text">
	<p v-for="(item,index) in searchResult" :key="index">{{item}}</p>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			keyword:"",
			searchResult:[],
			arr:["zhangsan","lisi","wangwu","zhaoliu","yanqi","shenba"]
		},
		watch:{
			keyword(newsValue){
				this.searchResult = this.arr.filter(v=>v.includes(newsValue));
			}
		}
	})
</script>
</html>
```



## 9-6- 通过计算属性完成搜索

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<input v-model="keyword" type="text">
	<p v-for="(item,index) in searchResult" :key="index">{{item}}</p>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			keyword:"",
			arr:["zhangsan","lisi","wangwu","zhaoliu","yanqi","shenba"]
		},
		computed:{
			searchResult(){
				
				return this.arr.filter(v=>(this.keyword.length>0 && v.includes(this.keyword)));
			}
		}
	})
</script>
</html>
```



## 9-7- 获取名字案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<input v-model="firstName" placeholder="请输入姓" type="text">
	<input v-model="lastName" placeholder="请输入名" type="text">
	<hr/>
	{{fullName}}
	<hr/>
	{{fullName2}}
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			firstName:"",// 姓
			lastName:"",// 名
			fullName:""// 姓名
		},
		watch:{
			firstName(newsValue){
				this.fullName = newsValue+this.lastName;
			},
			lastName(newsValue){
				this.fullName = this.firstName+newsValue;
			}
		},
		computed:{
			fullName2(){
				return this.firstName+this.lastName;
			}
		}
		
	})
</script>
</html>
```

## 9-8- 外部侦听

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<input type="text" v-model="num">
	<div>{{num}}</div>
	<input type="text" v-model="obj.userName">
	<input type="text" v-model="obj.age">
	<hr/>
	<One/>
</div>
</body>
<script>
	const One = Vue.extend({
		data() {
			return {
				num: 100
			}
		},
		template: `
			<div>
				<button @click="num++">{{ num }}</button>
			</div>
		`
	})
	const vm = new Vue({
		el: "#root",
		data: {
			num: 0,
			obj:{
				userName:"zhangsan",
				age:12
			}
		},
		methods: {},
		components: {
			One
		}
	})
	vm.$watch("num", function (newValue, oldValue) {
		console.log(newValue, oldValue, this.num);
	})
	vm.$watch("obj",function(newValue,oldValue){
		console.log(newValue,oldValue);
	},{
		deep:true
	})
</script>
</html>
```

# 十- 补充Vue实例属性以及方法

## 10-1- $mount 

> 实现手动挂载

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		[v-cloak]{
			display: none;
		}
	</style>
	<script src="lib/vue.js"></script>
</head>
<body>
<button>挂载</button>
<div v-cloak id="root">
	{{num}}
</div>
</body>
<script>
	// 1
	// new Vue({
	// 	el:"#root",
	// 	data:{
	// 		num:1000
	// 	},
	// 	methods:{
	//
	// 	}
	// })
	
	// 2
	// new Vue({
	// 	data:{
	// 		num:90
	// 	}
	// }).$mount("#root");
	
	
	// 3
	// const vm = new Vue({
	// 	data:{
	// 		num:80
	// 	}
	// })
	// vm.$mount("#root");
	
	
	// 4
	const btn = document.querySelector("button");
	btn.onclick = function(){
		vm.$mount("#root");
	}
	const vm = new Vue({
		data:{
			num:70
		}
	})
</script>
</html>
```



## 10-2- $options

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root"></div>
</body>
<script>
	// this.$options属性获取配置对象
	new Vue({
		el:"#root",
		data:{
			a:1
		},
		methods:{
			fn(){
			
			}
		},
		userName:"zhangsan",
		mounted(){
			console.log(this.$options)
		}
	})
</script>
</html>
```

## 10-3- $data

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root"></div>
</body>
<script>
	const data = {
		userName:"zhangsan",
		age:12
	}
	new Vue({
		el:"#root",
		data,
		mounted(){
			console.log(this.$data===data);// true
		}
	})
</script>
</html>
```



## 10-4- $el

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	{{str}}
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			str:"马上就要放假了，好激动呀！回来的火车票我也该买了，买了没？买了"
		},
		mounted(){
			console.log(this.$el === document.querySelector("#root"));// true
			this.$el.style.color = "red";
		}
	})
</script>
</html>
```

## 10-5- $**nextTick-----重要**

### 10-5-1- 基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button ref="btn" @click="changeStr">{{str}}</button>
</div>
</body>
<script>
	const vm = new Vue({
		el:"#root",
		data:{
			str:"昨天有点冷"
		},
		methods:{
			changeStr(){
				// 数据发生改变，更新视图是异步行为
				// this.str = "今天更冷";
				// console.log(this.$refs.btn.innerText);// 昨天有点冷
				
				// 解决方案1
				// this.str = "今天更冷2";
				// setTimeout(()=>{
				// 	console.log(this.$refs.btn.innerText);
				// })
				
				// 解决方案2：通过this.$nextTick获取更新数据以后的最新视图内容
				// this.str = "今天更冷3";
				// // $nextTick函数中会进行数据判断
				// this.$nextTick(function(){
				// 	console.log(this.$refs.btn.innerText);
				// })
				// console.log("over");
				
				// 注意：要将this.$nextTick写在更新数据语句的后边，写前面获取不到最新的数据
				// this.$nextTick(function(){
				// 	console.log(this.$refs.btn.innerText);
				// })
				// this.str = "今天更冷3";
				// console.log("over");
				
				// $nextTick返回的是Promise实例
				// this.str = "今天更冷4";
				// this.$nextTick().then((vue)=>{
				// 	console.log(vue===this,vue.$refs.btn.innerText)
				// })
				
				
				this.str = "今天更冷5";
			}
		},
		beforeCreate(){
			// console.log(this.$refs.btn) // undefined
			this.$nextTick(function(){
				// console.log(this===vm);
				console.log(this.$refs.btn.innerText)
			})
		},
		created(){
			this.$nextTick(function(){
				// console.log(this===vm);
				console.log(this.$refs.btn.innerText)
			})
		}
	})
</script>
</html>
```



### 10-5-2- 应用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	姓名：
	<span v-show="!isUp">{{userName}}</span>
	<input ref="userNameRef" v-show="isUp" v-model="userName" type="text">
	<button @click="changeUserName">编辑</button>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			userName:"zhangsan",
			isUp:false // 是否更新
		},
		methods:{
			changeUserName() {
				this.isUp = !this.isUp;
				this.$nextTick().then(function(vm){
					vm.$refs.userNameRef.focus();
				})
				
			}
		}
	})
</script>
</html>
```





# 十一- 响应式原理

## 11-1- Object.definedProperty

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>

</body>
<script>
	// 1
	// const obj = {
	// 	userName:"zhangsan"
	// }
	// // 读取obj对象下的userName属性。
	// console.log(obj.userName);// zhangsan
	// obj.userName = "lisi";// 设置，写入
	// console.log(obj.userName);// lisi
	
	// 2
	// const obj = {
	// 	userName:"zhangsan"
	// }
	// // defineProperty称为拦截器函数。
	// // 第一个参数是要拦截的对象，第二个参数是拦截的对象属性名称，第三个参数是描述。
	// Object.defineProperty(obj,"userName",{
	// 	// 当进行读取操作时会执行
	// 	get(){
	// 		console.log("get");
	// 		return 100;
	// 	},
	// 	// 当进行写入（设置）操作时会执行
	// 	set(){
	// 		console.log("set");
	// 	}
	// })
	// console.log(obj.userName);// 100
	// obj.userName = "lisi";
	// console.log(obj.userName);// 100
	
	// 3
	const obj = {
		userName:"zhangsan"
	}
	let _userName = obj.userName;
	Object.defineProperty(obj,"userName",{
		get(){
			console.log("get");
			return _userName;
		},
		set(v){
			console.log("set",v);
			_userName = v;
		}
	})
	console.log(obj.userName);
	obj.userName = "lisi";// 调用描述对象中的set方法，并传递参数值lisi
	console.log(obj.userName);
	
</script>
</html>
```

## 11-2- Object.defineProptery的应用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>

</body>
<script>
	// 1
	// const obj = {
	// 	bookName:"天龙八部"
	// }
	// console.log("《"+obj.bookName+"》");
	//
	// obj.bookName = "倚天屠龙记";
	// console.log("《"+obj.bookName+"》");
	
	
	// 2
	const obj = {
		bookName:"天龙八部"
	}
	let _bookName = obj.bookName;
	let arrLog = [obj.bookName];
	Object.defineProperty(obj,"bookName",{
		get(){
			return "《"+_bookName+"》";
		},
		set(v){
			arrLog.push(v);
			_bookName = v;
		}
	})
	// console.log(obj.bookName);
	obj.bookName = "倚天屠龙记";
	obj.bookName = "射雕英雄传";
	// console.log(obj.bookName);
	console.log(arrLog);
</script>
</html>
```

## 11-3- 简易的双向绑定

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
<input type="text">
<div></div>
</body>
<script>
	const inp = document.querySelector("input");
	const div = document.querySelector("div");
	const data = {
		str:"双向绑定"
	}
	let _str = data.str;
	Object.defineProperty(data,"str",{
		get(){
			return _str;
		},
		set(v){
			_str = v;
			div.innerText = v;
		}
	})
	inp.oninput = function(){
		data.str = this.value;
	}
	inp.value = div.innerText = data.str;
</script>
</html>
```



## 11-4- 数据代理

* Zhang.js

  ```js
  // 1- 未整理
  // function Zhang(options){
  // 	this.$options = options;
  // 	// 在读取或操作实例下的属性时，其本质操作的是$data
  // 	this.$data = options.data;
  //
  // 	for(let key in this.$options.methods){
  // 		this[key] = this.$options.methods[key];
  // 	}
  //
  // 	for(let key in this.$data){
  // 		Object.defineProperty(this,key,{
  // 			get(){
  // 				return this.$data[key];
  // 			},
  // 			set(v){
  // 				this.$data[key] = v;
  // 			}
  // 		})
  // 	}
  //
  // }
  
  
  // 2- 整理- 封装initMethods，initState
  // function Zhang(options){
  // 	this.$options = options;
  // 	// 在读取或操作实例下的属性时，其本质操作的是$data
  // 	this.$data = options.data;
  // 	this.initMethods();
  // 	this.initState();
  //
  // }
  // Zhang.prototype.initMethods = function(){
  // 	for(let key in this.$options.methods){
  // 		this[key] = this.$options.methods[key];
  // 	}
  // }
  // Zhang.prototype.initState = function(){
  // 	for(let key in this.$data){
  // 		Object.defineProperty(this,key,{
  // 			get(){
  // 				return this.$data[key];
  // 			},
  // 			set(v){
  // 				this.$data[key] = v;
  // 			}
  // 		})
  // 	}
  // }
  
  // 3- 整理- proxy
  function Zhang(options){
  	this.$options = options;
  	// 在读取或操作实例下的属性时，其本质操作的是$data
  	this.$data = options.data;
  	this.initMethods();
  	this.initState();
  	
  }
  Zhang.prototype.initMethods = function(){
  	for(let key in this.$options.methods){
  		this[key] = this.$options.methods[key];
  	}
  }
  Zhang.prototype.initState = function(){
  	for(let key in this.$data){
  		this.proxy(key)
  	}
  }
  Zhang.prototype.proxy = function(key){
  	Object.defineProperty(this,key,{
  		get(){
  			// console.log("get",this===obj)
  			return this.$data[key];
  		},
  		set(v){
  			this.$data[key] = v;
  		}
  	})
  }
  ```

* html

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>Title</title>
  	<script src="lib/Zhang.js"></script>
  </head>
  <body>
  
  </body>
  <script>
  	const data = {
  		userName:"lisi"
  	}
  	const zm = new Zhang({
  		data,
  		methods:{
  			fn(){
  				this.userName = "wangwu";
  			}
  		}
  	});
  	// console.log(zm.$data === data);
  	// zm.userName = "wangwu";
  	// console.log(zm.userName,zm.$data.userName,data.userName);
  	
  	zm.fn();
  	console.log(zm.userName);// wangwu
  </script>
  </html>
  ```

  

## 11-5- 响应式原理

* zhang4.js

  ```js
  // 1- 编译器（compile）:编译模板
  // 2- 监听器（observe）：监听数据是否发生改变。
  // 3- watcher：负责生成订阅者。数据发生改变后会触发订阅者。
  // 通过编译器对模板进行解析，解析的过程中可以通过Watcher生成订阅者，并将其进行保存。
  // 在初始化时增加对数据的监听。当数据发生改变后，调用对就原订阅者，从而实现响应式。
  function Zhang(options){
  	this.$el = document.querySelector(options.el);
  	this.$data = options.data;// {userName:"zhangsan"}
  	// $binds应该与$data的结构相同
  	this.$binds = {}
  	
  	for(let key in options.methods){
  		this[key] = options.methods[key];
  	}
  	
  	// 调用监听器方法
  	this.observe();
  	// 调用编译器方法
  	this.compile(this.$el);
  }
  Object.assign(Zhang.prototype,{
  	// 监听器
  	observe(){
  		// 为this(当前实例）增加拦截
  		for(let key in this.$data){
  			this.$binds[key] = [];
  			Object.defineProperty(this,key,{
  				get(){
  					return this.$data[key];
  				},
  				set(v){
  					this.$data[key] = v;
  					this.$binds[key].forEach(item=>item.update())
  				}
  			})
  		}
  	},
  	// 编译模板
  	compile(el){
  		// 获取模块中的子元素
  		const nodes = el.children;
  		// console.log(nodes)
  		for(let i = 0;i<nodes.length;i++){
  			const node = nodes[i];
  			this.compile(node);
  			// 判断有没有属性名字为z-model的元素
  			if(node.hasAttribute("z-model")){
  				// z-model:1- 可以将数据绑定至自身value属性中
  				// z-model:2- 增加input事件，该事件对应的处理函数可以更新数据
  				const attrValue = node.getAttribute("z-model");
  				node.value = this[attrValue];
  				const _this = this;
  				node.addEventListener("input",function(){
  					_this[attrValue] = this.value;
  				})
  				
  				// 增加订阅者，订阅者的职责：将数据在模块中进行响应
  				this.$binds[attrValue].push(new Watcher(node,"value",this,attrValue))
  			}
  			if(node.hasAttribute("@click")){
  				const attrValue = node.getAttribute("@click");
  				// 1
  				// node.addEventListener("click",()=>{
  				// 	this[attrValue]();
  				// })
  				
  				// 2
  				node.addEventListener("click",this[attrValue].bind(this))
  			}
  			
  			// 判断有没有属性名字为z-text的元素
  			if(node.hasAttribute("z-text")){
  				const attrValue = node.getAttribute("z-text");
  				node.innerText = this[attrValue];
  				this.$binds[attrValue].push(new Watcher(node,"innerText",this,attrValue))
  			}
  			// 判断有没有属性名字为z-html的元素
  			if(node.hasAttribute("z-html")){
  				const attrValue = node.getAttribute("z-html");
  				node.innerHTML = this[attrValue];
  				this.$binds[attrValue].push(new Watcher(node,"innerHTML",this,attrValue))
  			}
  		}
  	}
  })
  // node:操作的元素
  // attrName:操作元素的属性名字
  // zm:实例
  // attrValue:数据的属性名字
  function Watcher(node,attrName,zm,attrValue){
  	this.node = node;
  	this.attrName = attrName;
  	this.zm = zm;
  	this.attrValue = attrValue;
  }
  Watcher.prototype.update = function(){
  	this.node[this.attrName] = this.zm[this.attrValue];
  }
  
  ```

* html

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>Title</title>
  	<script src="lib/Zhang4.js"></script>
  </head>
  <body>
  	<div id="root">
  		<button @click="initUserName" z-text="userName"></button>
  		<hr/>
  		<input z-model="userName" type="text">
  		<input z-model="userName" type="text">
  		<div z-text="userName"></div>
  		<div z-html="userName"></div>
  		<hr/>
  		<div>
  			<input z-model="age" type="text">
  			<div z-html="age"></div>
  		</div>
  		
  	</div>
  </body>
  <script>
  	const zm = new Zhang({
  		el:"#root",
  		data:{
  			userName:"响应式原理",
  			age:100
  		},
  		methods:{
  			initUserName(){
  				console.log(this);
  				this.userName = "响应式原理";
  				this.age = 100;
  			}
  		}
  	});
  </script>
  </html>
  ```

  



# 十二- 生命周期

![image-20230128080256943](assets\image-20230128080256943.png)



## 12-1- 挂载阶段

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<input v-model="str" type="text"/>
	<div ref="userName">{{str}}</div>
</div>
</body>
<script>
	
	
	new Vue({
		el:"#root",
		data:{
			str:"1"
		},
		methods:{
			fn(){
			
			}
		},
		beforeCreate(){
			// 数据以及方法不可用。实例还未创建完成。
			// 判断用户的状态，可以在此处进行重定向。或调用一些API(不会对数据造成影响)
			console.group("*****************1-beforeCreate***************************");
			console.log(this.str);// undefined
			console.log(this.fn);// undefined
			console.log(this.$refs.userName);// undefined
			console.log(document.querySelector("#root div").innerText);// {{str}}
			console.groupEnd();
		},
		created(){
			// 数据以及方法可以使用，实例已经创建完成，但是未与模板创建关联。
			// 可以通过逻辑对数据进行纠正。
			// this.str = "我在created钩子函数中";
			console.group("*****************2-created***************************");
			console.log(this.str);// 1
			console.log(this.fn);// function(){}
			console.log(this.$refs.userName);// undefined
			console.log(document.querySelector("#root div").innerText);// {{str}}
			console.groupEnd();
		},
		beforeMount(){
			// 准备进行挂载，执行到此处无法获取DOM
			this.str = "2";
			console.group("*****************3-beforeMount***************************");
			console.log(this.str);// 1
			console.log(this.fn);// function(){}
			console.log(this.$refs.userName);// undefined
			console.log(document.querySelector("#root div").innerText);// {{str}}
			console.groupEnd();
		},
		mounted(){
			// 挂载完毕:异步行为
			console.group("*****************4-mounted***************************");
			console.log(this.str);// 1
			console.log(this.fn);// function(){}
			console.log(this.$refs.userName);//<div>1</div>
			console.log(document.querySelector("#root div").innerText);// 1
			console.groupEnd();
		}
	})
</script>
</html>
```

## 12-2- 运行阶段

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<button @click="fn">点我</button>
	<button @click="changeAge">更改age</button>
	<input v-model="str" type="text"/>
	<div ref="userName">{{str}}</div>
</div>
</body>
<script>
	
	
	new Vue({
		el:"#root",
		data:{
			str:"1",
			age:100
		},
		methods:{
			fn(){
				this.str = "1";
			},
			changeAge(){
				this.age = 200;
			}
		},
		// 数据(必须有模板中使用)只有发生改变才会执行。
		beforeUpdate(){
			// 数据已经更新完毕，但是视图还未更新
			console.group("*****************1-beforeUpdate***************************");
			console.log(this.str);// 11
			console.log(this.fn);// function(){}
			console.log(this.$refs.userName.innerText);// 1
			console.log(document.querySelector("#root div").innerText);//1
			console.groupEnd();
		},
		updated(){
			// 数据已经更新完毕，视图也更新完毕
			console.group("*****************2-updated***************************");
			console.log(this.str);// 11
			console.log(this.fn);// function(){}
			console.log(this.$refs.userName.innerText);// 11
			console.log(document.querySelector("#root div").innerText);//11
			console.groupEnd();
		},
	})
</script>
</html>
```



## 12-3- 销毁阶段

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<button onclick="destroy()">销毁</button>
<div id="root">
	<button ref="btn">{{num}}</button>
</div>
</body>
<script>
	const vm = new Vue({
		el:"#root",
		data:{
			num:0
		},
		methods:{
		
		},
		mounted(){
			this.timer = setInterval(()=>{
				console.log("interVal",this.num);
				this.num ++;
			},1000);
		},
		// 可以获取视图中的元素内容，但不可以更新了
		beforeDestroy(){
			this.num = 100;
			console.group("****************beforeDestroy***********************");
			console.log(this.num);
			console.log(this.$refs.btn.innerText);
			console.groupEnd();
		},
		// 不可以获取视图中的元素内容（断开视图与实例的关联）
		destroyed(){
			console.group("****************destroyed***********************");
			console.log(this.num);
			console.log(this.$refs.btn);
			console.groupEnd();
			clearInterval(this.timer);
		}
	});
	function destroy(){
		vm.$destroy();// 销毁实例
	}
</script>
</html>
```



## 12-4- 组件中的钩子函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	<h3>root</h3>
	<button @click="isShow=!isShow">显示与隐藏</button>
	<Child v-if="isShow" :num="num"/>
</div>
</body>
<script>
	new Vue({
		el:"#root",
		data:{
			num:100,
			isShow:true
		},
		components:{
			Child:{
				props:["num"],
				data(){
				    return {
						userName:"lisi"
				    }
				},
				template:`
					<div>
						<h3>Child组件:{{num}}</h3>
						{{userName}}
						<button ref="btn" @click="changeUserName">{{userName}}</button>
					</div>
				`,
				methods:{
					changeUserName(){
						this.userName+="?"
					}
				},
				beforeCreate(){
					console.log("实例创建之前");
				},
				created(){
					console.log("实例创建完成");
				},
				beforeMount(){
					console.log("组件挂载之前")
				},
				mounted(){
					console.log("组件挂载完成");
				},
				beforeUpdate(){
					console.log("更新视图之前",this.userName,this.$refs.btn.innerText)
				},
				updated(){
					console.log("更新渲染完成",this.userName,this.$refs.btn.innerText)
				},
				beforeDestroy(){
					console.log("断开与视图关联之前",this.$refs.btn)
				},
				destroyed(){
					console.log("断开与视图关联",this.$refs.btn)
				}
			}
		}
	})
</script>
</html>
```



# 十三- `Vue`脚手架

## 13-1- 渲染函数render

> 将数据渲染至界面中有两种方案：1-template  2-render
>
> 相同点：都可以渲染界面
>
> 不同点：render效率更高，render级别更高。

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<script src="lib/vue.js"></script>
</head>
<body>
<div id="root">
	345678904567890
</div>
</body>
<script>
	const App = {
		data(){
			return {
				str:"createElement"
			}
		},
		template:`<h3>render4:{{str}}</h3>`
	};
	new Vue({
		el:"#root",
		template:`<h3>template</h3>`,
		// 渲染函数1
		// render(createElement){
		// 	return createElement("h3","render");
		// }
		
		// 渲染函数2
		// render(createElement){
		// 	return createElement({
		// 		data(){
		// 			return {
		// 				str:"createElement"
		// 			}
		// 		},
		// 		template:`<h3>render2:{{str}}</h3>`
		// 	});
		// }
		
		// 渲染函数3
		// render(createElement){
		// 	return createElement(App);
		// }
		
		// 渲染函数4
		// render:createElement=>createElement(App)
		// 渲染函数5
		render:h=>h(App)
	})
</script>
</html>
```



## 13-2- 脚手架说明

> 1. `Vue`脚手架是`Vue`官方提供的标准化开发工具（开发平台）。它简化 了程序员基于`webpack`创建工程化的`Vue`项目过程。
>
> 2. 最新的版本是`5.x`。
>
> 3. 文档: https://cli.vuejs.org/zh/。
>
> <font color=red>官方：Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。</font>

## 13-3- 安装 `@vue/cli`

> `CLI:Command Line Interface 命令行接口`
>
> `@vue/cli` 是一个全局安装的 `npm` 包，提供了终端里的 `vue` 命令。

* 可以使用下列任一命令安装这个新的包：

```shell
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

* 检查其版本:

```shell
vue --version
# OR
vue -V
```

## 13-4- 通过命令创建项目

* 创建一个新项目:

```shell
vue create first
```

* 选择自动配置还是手动配置，我们选择自动配置

![image-20221113200945624](/assets/image-20221113200945624.png)

* 选择插件，回车：选择babel、`typscript`、路由、`Vuex`、`css`预编译

![image-20221113214200485](assets/image-20221113214200485.png)

* 选择`Vue` 版本：选择`2.x`

![image-20221113214331596](assets/image-20221113214331596.png)

* 选择是否使用 history 风格的路由，输入y,回车

![image-20221113214428800](assets/image-20221113214428800.png)

* 选择 `css` 预编译，选择Less,回车

![image-20221113214522882](assets/image-20221113214522882.png)

* 选择各插件配置的保存方式:选择各个配置单独文件（`In dedicated config files`）

![image-20221113214640755](assets/image-20221113214640755.png)

* 是否将这个配置保存下来:我们选择N

![image-20221113214728634](assets/image-20221113214728634.png)

* 执行依赖的下载，最后完成的页面如下:

![image-20221113203954176](assets/image-20221113203954176.png)

* 进入项目目录

  ```shell
  cd first
  ```

* 启动项目

  ```shell
  yarn serve
  Or
  npm run serve
  ```

* 浏览器查看：

  ![image-20221113204527440](assets/image-20221113204527440.png)

## 13-5- 项目结构

```shell
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── components: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── jsconfig.json: js配置文件
├── package.json: 应用包配置文件 
├── vue.config.js: vue配置文件
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
```

## 13-6- 项目基本配置文件

* vue.config.js

  ```js
  const {defineConfig} = require('@vue/cli-service')
  module.exports = defineConfig({
  	// 支持语法的转换。
  	transpileDependencies: true,
      // 开发服务配置
  	devServer:{
  		host:"zhangpeiyue.com",// 指定域名
  		port:80,// 指定端口号
  		open:true,// 打开浏览器
  	}
  })
  
  ```

  

## 13-7- 使用组件

* 清空`src`目录

* src->main.js

  ```js
  import Vue from "vue";
  import App from "@/App";
  // 1- 挂载
  // new Vue({
  // 	el:"#app",
  // 	render:h=>h(App)
  // })
  
  // 2- 挂载
  new Vue({
  	render:h=>h(App)
  }).$mount("#app")
  ```

* src->App.vue

  ```vue
  <!--视图层：不可以省略-->
  <template>
      <div>
          <h3>App组件:{{ userName }}</h3>
          <button @click="num++">{{ num }}</button>
  
          <hr/>
          <MyCom :userName="userName"/>
          <hr/>
          <One :num="num"/>
      </div>
  </template>
  <!--逻辑层-->
  <script>
  import MyCom from "@/components/MyCom";
  import One from "@/components/One";
  
  export default {
      name: "App",
      data() {
          return {
              userName: "zhangsan",
              num: 0
          }
      },
      components:{
          MyCom,
          One
      }
  }
  </script>
  <!--样式层-->
  <!--1- lang=less 支持less
      2- scoped:可以让样式独立，不会产生冲突
  -->
  <style lang="less" scoped>
  div {
     h3{
         color:red;
     }
  }
  </style>
  ```

  

* src->components->One.vue

  ```vue
  <template>
      <div>
          <h3>One</h3>
          <p>num:{{num}}</p>
          <p>sex:{{sex}}</p>
      </div>
  </template>
  
  <script>
  export default {
      name: "One",
      props:{
          num:Number,
          sex:{
              type:String,
              default:"男"
          }
      }
  }
  </script>
  
  <style scoped>
      h3{
          color:yellow;
      }
  </style>
  ```

  

* src->components->MyCom.vue

  ```vue
  <template>
      <div>
          <h3>MyCom:{{userName}}</h3>
      </div>
  </template>
  
  <script>
  export default {
      name: "MyCom",
      props:["userName"]
  }
  </script>
  
  <style scoped>
      h3{
          color:skyblue;
      }
  </style>
  ```

  

## 13-8- 插件的安装

### 13-8-1- 不作为插件使用

* src->filters->index.js

  ```js
  const filters = {
  	date(time){
  		const timer = new Date(time);
  		return timer.getFullYear()+"-"+
  			(timer.getMonth()+1).toString().padStart(2,"0")+"-"+
  			timer.getDate().toString().padStart(2,"0")+" "+
  			timer.getHours().toString().padStart(2,"0")+":"+
  			timer.getMinutes().toString().padStart(2,"0")+":"+
  			timer.getSeconds().toString().padStart(2,"0");
  	},
  	currency(num,n=2){
  		return "￥"+num.toFixed(n)
  	},
  	sliceNum(str,num){
  		return str.slice(0,num);
  	},
  	getImg(img){
  		return "https://img30.360buyimg.com/"+img;
  	}
  };
  export default filters;
  ```

* src->main.js

  ```js
  import Vue from "vue";
  import App from "@/App";
  import filters from "@/filters";
  // 全局过滤器
  for(let key in filters){
  	Vue.filter(key,filters[key]);
  }
  new Vue({
  	render:h=>h(App)
  }).$mount("#app")
  ```

* src->App.vue

  ```vue
  <!--视图层：不可以省略-->
  <template>
      <div>
          <h3>App组件:{{ userName }}</h3>
          <button @click="num++">{{ num }}</button>
          <p>{{nowTime | date}}</p>
          <p>{{money | currency(3)}}</p>
          <hr/>
          <MyCom :userName="userName"/>
          <hr/>
          <One :nowTime="nowTime" :num="num"/>
      </div>
  </template>
  <!--逻辑层-->
  <script>
  import MyCom from "@/components/MyCom";
  import One from "@/components/One";
  
  export default {
      name: "App",
      data() {
          return {
              userName: "zhangsan",
              num: 0,
              nowTime:Date.now(),
              money:100
          }
      },
      components: {
          MyCom,
          One
      },
      // filters:{
      //     date(time){
      //         const timer = new Date(time);
      //         return timer.getFullYear()+"-"+
      //                 (timer.getMonth()+1).toString().padStart(2,"0")+"-"+
      //                 timer.getDate().toString().padStart(2,"0")+" "+
      //                 timer.getHours().toString().padStart(2,"0")+":"+
      //                 timer.getMinutes().toString().padStart(2,"0")+":"+
      //                 timer.getSeconds().toString().padStart(2,"0");
      //     },
      //     currency(num,n=2){
      //         return "￥"+num.toFixed(n)
      //     },
      //     sliceNum(str,num){
      //         return str.slice(0,num);
      //     },
      //     getImg(img){
      //         return "https://img30.360buyimg.com/"+img;
      //     }
      // }
  }
  </script>
  <!--样式层-->
  <!--1- lang=less 支持less
      2- scoped:可以让样式独立，不会产生冲突
  -->
  <style lang="less" scoped>
  div {
     h3{
         color:red;
     }
  }
  </style>
  ```

* src->components->One.vue

  ```vue
  <template>
      <div>
          <h3>One</h3>
          <p>num:{{num}}</p>
          <p>sex:{{sex}}</p>
          <p>{{nowTime | date}}</p>
      </div>
  </template>
  
  <script>
  export default {
      name: "One",
      props:{
          num:Number,
          sex:{
              type:String,
              default:"男"
          },
          nowTime:Number
      }
  }
  </script>
  
  <style scoped>
      h3{
          color:yellow;
      }
  </style>
  ```

  

### 13-8-2- 作为插件使用

* src->filters->index.js

  ```js
  const filters = {
  	date(time){
  		const timer = new Date(time);
  		return timer.getFullYear()+"-"+
  			(timer.getMonth()+1).toString().padStart(2,"0")+"-"+
  			timer.getDate().toString().padStart(2,"0")+" "+
  			timer.getHours().toString().padStart(2,"0")+":"+
  			timer.getMinutes().toString().padStart(2,"0")+":"+
  			timer.getSeconds().toString().padStart(2,"0");
  	},
  	currency(num,n=2){
  		return "￥"+num.toFixed(n)
  	},
  	sliceNum(str,num){
  		return str.slice(0,num);
  	},
  	getImg(img){
  		return "https://img30.360buyimg.com/"+img;
  	}
  };
  // 插件定义1- 导出对象
  // export default {
  // 	install(Vue){
  // 		for(let key in filters){
  // 			Vue.filter(key,filters[key]);
  // 		}
  // 	}
  // };
  
  // 插件定义2- 导出函数
  export default function(Vue){
  	console.log(111111)
  	for(let key in filters){
  		Vue.filter(key,filters[key]);
  	}
  }
  ```

* src->main.js

  ```js
  import Vue from "vue";
  import App from "@/App";
  import filters from "@/filters";
  // 使用插件：将过滤器作为插件使用
  // 安装插件可以多次，但函数只会运行一次。
  Vue.use(filters);
  Vue.use(filters);
  Vue.use(filters);
  Vue.use(filters);
  Vue.use(filters);
  new Vue({
  	render:h=>h(App)
  }).$mount("#app")
  ```

  

# 十四- todoList

## 14-1- 呈现页面

* src->main.js

  ```js
  import Vue from "vue";
  import App from "@/App";
  // 使用样式1-通过import引入
  // 使用样式2- 在组件->style
  import "@/assets/style/base.css"
  new Vue({
  	render:h=>h(App)
  }).$mount("#app")
  ```

* src->App.vue

  ```vue
  <template>
      <div class="todo-container">
          <div class="todo-wrap">
              <div class="todo-header">
                  <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
              </div>
              <ul class="todo-main">
                  <li>
                      <label>
                          <input type="checkbox"/>
                          <span>xxxxx</span>
                      </label>
                      <button class="btn btn-danger" style="display:none">删除</button>
                  </li>
                  <li>
                      <label>
                          <input type="checkbox"/>
                          <span>yyyy</span>
                      </label>
                      <button class="btn btn-danger" style="display:none">删除</button>
                  </li>
              </ul>
              <div class="todo-footer">
                  <label>
                      <input type="checkbox"/>
                  </label>
                  <span>
            <span>已完成0</span> / 全部2
          </span>
                  <button class="btn btn-danger">清除已完成任务</button>
              </div>
          </div>
      </div>
  </template>
  
  <script>
  // import "@/assets/style/base.css"
  export default {
      name: "App"
  }
  </script>
  
  <style scoped>
  /*base*/
  /*body {*/
  /*    background: #fff;*/
  /*}*/
  
  /*.btn {*/
  /*    display: inline-block;*/
  /*    padding: 4px 12px;*/
  /*    margin-bottom: 0;*/
  /*    font-size: 14px;*/
  /*    line-height: 20px;*/
  /*    text-align: center;*/
  /*    vertical-align: middle;*/
  /*    cursor: pointer;*/
  /*    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);*/
  /*    border-radius: 4px;*/
  /*}*/
  
  /*.btn-danger {*/
  /*    color: #fff;*/
  /*    background-color: #da4f49;*/
  /*    border: 1px solid #bd362f;*/
  /*}*/
  
  /*.btn-danger:hover {*/
  /*    color: #fff;*/
  /*    background-color: #bd362f;*/
  /*}*/
  
  /*.btn:focus {*/
  /*    outline: none;*/
  /*}*/
  
  
  /*!*app*!*/
  /*.todo-container {*/
  /*    width: 600px;*/
  /*    margin: 0 auto;*/
  /*}*/
  /*.todo-container .todo-wrap {*/
  /*    padding: 10px;*/
  /*    border: 1px solid #ddd;*/
  /*    border-radius: 5px;*/
  /*}*/
  
  /*!*header*!*/
  /*.todo-header input {*/
  /*    width: 560px;*/
  /*    height: 28px;*/
  /*    font-size: 14px;*/
  /*    border: 1px solid #ccc;*/
  /*    border-radius: 4px;*/
  /*    padding: 4px 7px;*/
  /*}*/
  
  /*.todo-header input:focus {*/
  /*    outline: none;*/
  /*    border-color: rgba(82, 168, 236, 0.8);*/
  /*    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);*/
  /*}*/
  
  /*!*main*!*/
  /*.todo-main {*/
  /*    margin-left: 0px;*/
  /*    border: 1px solid #ddd;*/
  /*    border-radius: 2px;*/
  /*    padding: 0px;*/
  /*}*/
  
  /*.todo-empty {*/
  /*    height: 40px;*/
  /*    line-height: 40px;*/
  /*    border: 1px solid #ddd;*/
  /*    border-radius: 2px;*/
  /*    padding-left: 5px;*/
  /*    margin-top: 10px;*/
  /*}*/
  /*!*item*!*/
  /*li {*/
  /*    list-style: none;*/
  /*    height: 36px;*/
  /*    line-height: 36px;*/
  /*    padding: 0 5px;*/
  /*    border-bottom: 1px solid #ddd;*/
  /*}*/
  
  /*li label {*/
  /*    float: left;*/
  /*    cursor: pointer;*/
  /*}*/
  
  /*li label li input {*/
  /*    vertical-align: middle;*/
  /*    margin-right: 6px;*/
  /*    position: relative;*/
  /*    top: -1px;*/
  /*}*/
  
  /*li button {*/
  /*    float: right;*/
  /*    display: none;*/
  /*    margin-top: 3px;*/
  /*}*/
  
  /*li:before {*/
  /*    content: initial;*/
  /*}*/
  
  /*li:last-child {*/
  /*    border-bottom: none;*/
  /*}*/
  
  /*!*footer*!*/
  /*.todo-footer {*/
  /*    height: 40px;*/
  /*    line-height: 40px;*/
  /*    padding-left: 6px;*/
  /*    margin-top: 5px;*/
  /*}*/
  
  /*.todo-footer label {*/
  /*    display: inline-block;*/
  /*    margin-right: 20px;*/
  /*    cursor: pointer;*/
  /*}*/
  
  /*.todo-footer label input {*/
  /*    position: relative;*/
  /*    top: -1px;*/
  /*    vertical-align: middle;*/
  /*    margin-right: 5px;*/
  /*}*/
  
  /*.todo-footer button {*/
  /*    float: right;*/
  /*    margin-top: 5px;*/
  /*}*/
  
  </style>
  ```

* src->assets->style->base.css

  ```css
  /*base*/
  body {
      background: #fff;
  }
  
  .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
  }
  
  .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
  }
  
  .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
  }
  
  .btn:focus {
      outline: none;
  }
  
  
  /*app*/
  .todo-container {
      width: 600px;
      margin: 0 auto;
  }
  .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
  }
  
  /*header*/
  .todo-header input {
      width: 560px;
      height: 28px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 7px;
  }
  
  .todo-header input:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
  
  /*main*/
  .todo-main {
      margin-left: 0px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0px;
  }
  
  .todo-empty {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding-left: 5px;
      margin-top: 10px;
  }
  /*item*/
  li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
  }
  
  li label {
      float: left;
      cursor: pointer;
  }
  
  li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
  }
  
  li button {
      float: right;
      display: none;
      margin-top: 3px;
  }
  
  li:before {
      content: initial;
  }
  
  li:last-child {
      border-bottom: none;
  }
  
  /*footer*/
  .todo-footer {
      height: 40px;
      line-height: 40px;
      padding-left: 6px;
      margin-top: 5px;
  }
  
  .todo-footer label {
      display: inline-block;
      margin-right: 20px;
      cursor: pointer;
  }
  
  .todo-footer label input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
  }
  
  .todo-footer button {
      float: right;
      margin-top: 5px;
  }
  
  ```

  

## 14-2- 拆分组件

* src->assets->style->base.css

  ```css
  /*base*/
  body {
      background: #fff;
  }
  .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
  }
  
  .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
  }
  
  .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
  }
  
  .btn:focus {
      outline: none;
  }
  ```

* src->components->TodoHeader.vue

  ```vue
  <template>
      <div class="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
  </template>
  
  <script>
  export default {
      name: "TodoHeader"
  }
  </script>
  
  <style scoped>
  /*header*/
  .todo-header input {
      width: 560px;
      height: 28px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 7px;
  }
  
  .todo-header input:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
  
  </style>
  ```

  

* src->components->TodoMain.vue

  ```vue
  <template>
      <ul class="todo-main">
          <li>
              <label>
                  <input type="checkbox"/>
                  <span>xxxxx</span>
              </label>
              <button class="btn btn-danger" style="display:none">删除</button>
          </li>
          <li>
              <label>
                  <input type="checkbox"/>
                  <span>yyyy</span>
              </label>
              <button class="btn btn-danger" style="display:none">删除</button>
          </li>
      </ul>
  </template>
  
  <script>
  export default {
      name: "TodoMain"
  }
  </script>
  
  <style scoped>
  /*main*/
  .todo-main {
      margin-left: 0px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0px;
  }
  
  .todo-empty {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding-left: 5px;
      margin-top: 10px;
  }
  /*item*/
  li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
  }
  
  li label {
      float: left;
      cursor: pointer;
  }
  
  li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
  }
  
  li button {
      float: right;
      display: none;
      margin-top: 3px;
  }
  
  li:before {
      content: initial;
  }
  
  li:last-child {
      border-bottom: none;
  }
  
  </style>
  ```

  

* src->components->TodoFooter.vue

  ```vue
  <template>
      <div class="todo-footer">
          <label>
              <input type="checkbox"/>
          </label>
          <span>已完成0/ 全部2</span>
          <button class="btn btn-danger">清除已完成任务</button>
      </div>
  </template>
  
  <script>
  export default {
      name: "TodoFooter"
  }
  </script>
  
  <style scoped>
  /*footer*/
  .todo-footer {
      height: 40px;
      line-height: 40px;
      padding-left: 6px;
      margin-top: 5px;
  }
  
  .todo-footer label {
      display: inline-block;
      margin-right: 20px;
      cursor: pointer;
  }
  
  .todo-footer label input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
  }
  
  .todo-footer button {
      float: right;
      margin-top: 5px;
  }
  
  </style>
  ```

* src->App.vue

  ```vue
  <template>
      <div class="todo-container">
          <div class="todo-wrap">
              <TodoHeader></TodoHeader>
              <TodoMain></TodoMain>
              <TodoFooter></TodoFooter>
          </div>
      </div>
  </template>
  
  <script>
  import TodoHeader from "@/components/TodoHeader";
  import TodoMain from "@/components/TodoMain";
  import TodoFooter from "@/components/TodoFooter";
  export default {
      name: "App",
      components:{
          TodoFooter,
          TodoHeader,
          TodoMain
      }
  }
  </script>
  
  <style scoped>
  
  /*app*/
  .todo-container {
      width: 600px;
      margin: 0 auto;
  }
  .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
  }
  </style>
  ```

## 14-3- 完成头部

* src->App.vue

  ```vue
  <template>
      <div class="todo-container">
          <div class="todo-wrap">
              <TodoHeader :addTodoList="addTodoList"></TodoHeader>
              <TodoMain></TodoMain>
              <TodoFooter></TodoFooter>
          </div>
      </div>
  </template>
  
  <script>
  import TodoHeader from "@/components/TodoHeader";
  import TodoMain from "@/components/TodoMain";
  import TodoFooter from "@/components/TodoFooter";
  export default {
      name: "App",
      data(){
          return {
              todoList:[]// [{id:xxxx,title:xxxx,isChecked:true}]
          }
      },
      methods:{
          // 完成添加任务
          addTodoList(e){
              // 添加的标题
              const title = e.target.value.trim();
              if(title.length===0){
                  alert("请输入任务的标题");
                  return;
              }
              // 判断任务标题有否有重复的
              if(this.todoList.some(item=>item.title === title)){
                  alert("任务标题不允许重复");
                  return;
              }
              this.todoList.unshift({
                  id:Math.random().toString(36).slice(2),
                  title,
                  isChecked:true
              })
          }
      },
      components:{
          TodoFooter,
          TodoHeader,
          TodoMain
      }
  }
  </script>
  
  <style scoped>
  
  /*app*/
  .todo-container {
      width: 600px;
      margin: 0 auto;
  }
  .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
  }
  </style>
  ```

  

* src->components->TodoHeader.vue

  ```vue
  <template>
      <div class="todo-header">
          <input @keyup.enter="addTodoList" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
  </template>
  
  <script>
  export default {
      name: "TodoHeader",
      props:{
          addTodoList:Function
      }
  }
  </script>
  
  <style scoped>
  /*header*/
  .todo-header input {
      width: 560px;
      height: 28px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 7px;
  }
  
  .todo-header input:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
  
  </style>
  ```

  

## 14-4- 完成主体

* src->components->TodoMain.vue

  ```vue
  <template>
      <ul class="todo-main">
          <li @mouseenter="id=item.id" @mouseleave="id=-1" v-for="item in todoList" :key="item.id">
              <label>
                  <input v-model="item.isChecked" type="checkbox"/>
                  <span>{{item.title}}</span>
              </label>
              <button v-show="id===item.id" @click="delTodoListById(item.id)" class="btn btn-danger">删除</button>
          </li>
      </ul>
  </template>
  
  <script>
  export default {
      name: "TodoMain",
      data(){
          return {
              id:-1
          }
      },
      props:{
          todoList:Array,
          delTodoListById:Function
      }
  }
  </script>
  
  <style scoped>
  /*main*/
  .todo-main {
      margin-left: 0px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0px;
  }
  
  .todo-empty {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding-left: 5px;
      margin-top: 10px;
  }
  /*item*/
  li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
  }
  
  li label {
      float: left;
      cursor: pointer;
  }
  
  li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
  }
  
  li button {
      float: right;
      /*display: none;*/
      margin-top: 3px;
  }
  
  li:before {
      content: initial;
  }
  
  li:last-child {
      border-bottom: none;
  }
  
  </style>
  ```

* src->App.vue

  ```vue
  <template>
      <div class="todo-container">
          <div class="todo-wrap">
              <TodoHeader :addTodoList="addTodoList"></TodoHeader>
              <TodoMain :todoList="todoList" :delTodoListById="delTodoListById"></TodoMain>
              <TodoFooter></TodoFooter>
          </div>
      </div>
  </template>
  
  <script>
  import TodoHeader from "@/components/TodoHeader";
  import TodoMain from "@/components/TodoMain";
  import TodoFooter from "@/components/TodoFooter";
  export default {
      name: "App",
      data(){
          return {
              todoList:[]// [{id:xxxx,title:xxxx,isChecked:true}]
          }
      },
      methods:{
          // 完成添加任务
          addTodoList(e){
              // 添加的标题
              const title = e.target.value.trim();
              if(title.length===0){
                  alert("请输入任务的标题");
                  return;
              }
              // 判断任务标题有否有重复的
              if(this.todoList.some(item=>item.title === title)){
                  alert("任务标题不允许重复");
                  return;
              }
              this.todoList.unshift({
                  id:Math.random().toString(36).slice(2),
                  title,
                  isChecked:true
              })
              e.target.value = null;
          },
          // 根据ID删除元素
          delTodoListById(id){
              if(window.confirm("确定要删除该数据吗？")){
                  // 1
                  // const index = this.todoList.find(v=>v.id === id);
                  // this.todoList.splice(index,1);
  
                  // 2
                  this.todoList = this.todoList.filter(v=>v.id !== id);
              }
  
          }
      },
      components:{
          TodoFooter,
          TodoHeader,
          TodoMain
      }
  }
  </script>
  
  <style scoped>
  
  /*app*/
  .todo-container {
      width: 600px;
      margin: 0 auto;
  }
  .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
  }
  </style>
  ```

  

## 14-5- 完成底部

* src->App.vue

  ```vue
  <template>
      <div class="todo-container">
          <button @click="num++">{{ num }}</button>
          <div class="todo-wrap">
              <TodoHeader :addTodoList="addTodoList"></TodoHeader>
              <TodoMain :todoList="todoList" :delTodoListById="delTodoListById"></TodoMain>
              <TodoFooter :clearOverTodo="clearOverTodo" :changeAllIsChecked="changeAllIsChecked" :num="num" :todoList="todoList"></TodoFooter>
          </div>
      </div>
  </template>
  
  <script>
  import TodoHeader from "@/components/TodoHeader";
  import TodoMain from "@/components/TodoMain";
  import TodoFooter from "@/components/TodoFooter";
  
  export default {
      name: "App",
      data() {
          return {
              num: 0,
              todoList: []// [{id:xxxx,title:xxxx,isChecked:true}]
          }
      },
      methods: {
          // 完成添加任务
          addTodoList(e) {
              // 添加的标题
              const title = e.target.value.trim();
              if (title.length === 0) {
                  alert("请输入任务的标题");
                  return;
              }
              // 判断任务标题有否有重复的
              if (this.todoList.some(item => item.title === title)) {
                  alert("任务标题不允许重复");
                  return;
              }
              this.todoList.unshift({
                  id:Math.random().toString(36).slice(2),
                  title,
                  isChecked:true
              })
  
              // this.todoList = [
              //     {
              //         id:Math.random().toString(36).slice(2),
              //         title,
              //         isChecked:true
              //     },
              //     ...this.todoList,
              // ]
  
  
              e.target.value = null;
          },
          // 根据ID删除元素
          delTodoListById(id) {
              if (window.confirm("确定要删除该数据吗？")) {
                  // 1
                  // const index = this.todoList.find(v=>v.id === id);
                  // this.todoList.splice(index,1);
  
                  // 2
                  this.todoList = this.todoList.filter(v => v.id !== id);
              }
  
          },
          changeAllIsChecked(isChecked){
              this.todoList = this.todoList.map(item=>{
                  item.isChecked = isChecked;
                  return item;
              })
          },
          clearOverTodo(){
              this.todoList = this.todoList.filter(item=>!item.isChecked)
          }
      },
      components: {
          TodoFooter,
          TodoHeader,
          TodoMain
      }
  }
  </script>
  
  <style scoped>
  
  /*app*/
  .todo-container {
      width: 600px;
      margin: 0 auto;
  }
  
  .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
  }
  </style>
  ```

* src->components->TodoFooter.vue

  ```vue
  <template>
      <div class="todo-footer">
          <label>
              <input v-model="isAll" type="checkbox"/>
          </label>
  
          <span>测试：{{num}}已完成{{overNum}}/ 全部{{allNum}}</span>
          <button @click="clearOverTodo" class="btn btn-danger">清除已完成任务</button>
      </div>
  </template>
  
  <script>
  export default {
      name: "TodoFooter",
      props:{
          todoList:Array,
          num:Number,
          changeAllIsChecked:Function,
          clearOverTodo:Function
      },
      computed:{
          overNum(){
              return this.todoList.filter(v=>v.isChecked).length;
          },
          allNum(){
              return this.todoList.length;
          },
          isAll:{
              get(){
                  return this.overNum === this.allNum && this.overNum>0;
              },
              set(v){
                  this.changeAllIsChecked(v);
              }
          }
  
      }
  }
  </script>
  
  <style scoped>
  /*footer*/
  .todo-footer {
      height: 40px;
      line-height: 40px;
      padding-left: 6px;
      margin-top: 5px;
  }
  
  .todo-footer label {
      display: inline-block;
      margin-right: 20px;
      cursor: pointer;
  }
  
  .todo-footer label input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
  }
  
  .todo-footer button {
      float: right;
      margin-top: 5px;
  }
  
  </style>
  ```

  

## 14-6- 增加缓存

* App.vue

  ```vue
  <template>
      <div class="todo-container">
          <button @click="num++">{{ num }}</button>
          <div class="todo-wrap">
              <TodoHeader :addTodoList="addTodoList"></TodoHeader>
              <TodoMain :changeIsCheckedById="changeIsCheckedById" :todoList="todoList" :delTodoListById="delTodoListById"></TodoMain>
              <TodoFooter  :clearOverTodo="clearOverTodo" :changeAllIsChecked="changeAllIsChecked" :num="num" :todoList="todoList"></TodoFooter>
          </div>
      </div>
  </template>
  
  <script>
  import TodoHeader from "@/components/TodoHeader";
  import TodoMain from "@/components/TodoMain";
  import TodoFooter from "@/components/TodoFooter";
  
  export default {
      name: "App",
      data() {
          return {
              num: 0,
              todoList:localStorage.getItem("todoList")?JSON.parse(localStorage.getItem("todoList")):[]// [{id:xxxx,title:xxxx,isChecked:true}]
          }
      },
      methods: {
          changeIsCheckedById(id){
              // this.todoList = this.todoList.map(item=>{
              //     if(item.id === id){
              //         item.isChecked = !item.isChecked;
              //     };
              //     return item;
              // })
  
              const index = this.todoList.findIndex(item=>item.id === id);
              this.todoList[index].isChecked = !this.todoList[index].isChecked;
              this.$set(this.todoList,index,this.todoList[index])
          },
          // 完成添加任务
          addTodoList(e) {
              // 添加的标题
              const title = e.target.value.trim();
              if (title.length === 0) {
                  alert("请输入任务的标题");
                  return;
              }
              // 判断任务标题有否有重复的
              if (this.todoList.some(item => item.title === title)) {
                  alert("任务标题不允许重复");
                  return;
              }
              this.todoList.unshift({
                  id:Math.random().toString(36).slice(2),
                  title,
                  isChecked:true
              })
  
              // this.todoList = [
              //     {
              //         id:Math.random().toString(36).slice(2),
              //         title,
              //         isChecked:true
              //     },
              //     ...this.todoList,
              // ]
  
  
              e.target.value = null;
          },
          // 根据ID删除元素
          delTodoListById(id) {
              if (window.confirm("确定要删除该数据吗？")) {
                  // 1
                  // const index = this.todoList.find(v=>v.id === id);
                  // this.todoList.splice(index,1);
  
                  // 2
                  this.todoList = this.todoList.filter(v => v.id !== id);
              }
  
          },
          changeAllIsChecked(isChecked){
              this.todoList = this.todoList.map(item=>{
                  item.isChecked = isChecked;
                  return item;
              })
          },
          clearOverTodo(){
              this.todoList = this.todoList.filter(item=>!item.isChecked)
          }
      },
      watch:{
        todoList(){
            localStorage.setItem("todoList",JSON.stringify(this.todoList));
        }
      },
      // updated(){
      //     console.log("updated")
      //     localStorage.setItem("todoList",JSON.stringify(this.todoList));
      // },
      components: {
          TodoFooter,
          TodoHeader,
          TodoMain
      }
  }
  </script>
  
  <style scoped>
  
  /*app*/
  .todo-container {
      width: 600px;
      margin: 0 auto;
  }
  
  .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
  }
  </style>
  ```


# 十五- Vue中使用axios

## 15-1- axios在Vue中的基本使用

* 下载

  ```shell
  cnpm install axios
  ```

* vue.config.js

  ```js
  const {defineConfig} = require('@vue/cli-service')
  module.exports = defineConfig({
  	transpileDependencies: true,
      devServer:{
  		host:"zhangpeiyue.com",
  	    port:80,
          open:true
      }
  })
  
  ```

  

* src->清空

* src->main.js

  ```js
  import Vue from "vue";
  import App from "@/App";
  
  new Vue({
  	render:h=>h(App)
  }).$mount("#app");
  ```

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>获取仓库列表数据</h3>
      </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
      name: "App",
      mounted() {
          // 1
          // axios.get("https://api.github.com/search/repositories?q=r&sort=stars");
          // 2
          axios.get("https://api.github.com/search/repositories",{
              params:{
                  q:"r",
                  sort:"stars"
              }
          }).then(value=>{
              console.log(value.data);
          })
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

## 15-2- axios基本封装

* src->request->index.js

  ```js
  import axios from "axios";
  
  const request = axios.create({
  	baseURL:"https://api.github.com",
  	timeout:100000
  })
  request.interceptors.response.use(res=>res.data);
  // export default request;
  export default function(Vue){
  	Vue.prototype.$axios = request;
  }
  ```

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>获取仓库列表数据:{{$userName}}</h3>
      </div>
  </template>
  
  <script>
  export default {
      name: "App",
      async mounted() {
          // console.log(this.$userName);
          try{
              const data = await this.$axios.get("/search/repositories",{
                  params:{
                      q:"r",
                      sort:"stars"
                  }
              });
              console.log(data);
          }catch (err){
              console.log("有异常")
          }
  
  
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

* src->main.js

  ```js
  import Vue from "vue";
  import App from "@/App";
  // import axios from "axios";
  import request from "@/request";
  Vue.prototype.$userName = "zhangsan"
  // 1-
  // const $axios = axios.create({
  // 	baseURL:"https://api.github.com",
  // 	timeout:10000
  // })
  // $axios.interceptors.response.use(res=>res.data);
  // Vue.prototype.$axios = $axios;
  
  
  
  new Vue({
  	beforeCreate() {
  		// 2
  		// const $axios = axios.create({
  		// 	baseURL:"https://api.github.com",
  		// 	timeout:100000
  		// })
  		// $axios.interceptors.response.use(res=>res.data);
  		// Vue.prototype.$axios = $axios;
  		
  		
  		// 3
  		// Vue.prototype.$axios = request;
  		
  		// 4
  		Vue.use(request);
  	},
  	
  	render:h=>h(App)
  }).$mount("#app");
  ```

## 15-3- 渲染数据

* src->App.vue

```vue
<template>
    <div>
        <h3 v-if="isLoading">正在拼命加载中……</h3>
        <h3 v-else-if="isError">请求异常，请稍后再试！</h3>
        <template v-else>
            <div v-for="item in items" :key="item.id">
                <p><a :href="item.html_url">{{item.full_name}}</a></p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: "App",
    data(){
        return {
            isLoading:true,// 是否加载
            isError:false,// 是否有异常
            items:[],// 仓库列表
        }
    },
    async mounted() {
        // console.log(this.$userName);
        try{
            const {items} = await this.$axios.get("/search/repositories",{
                params:{
                    q:"r",
                    sort:"stars"
                }
            });
            this.isLoading = false;
            this.items = items.map(item=>{
                return {
                    id:item.id,
                    full_name:item.full_name,
                    html_url:item.html_url
                }
            });
        }catch (err){
            console.log("有异常")
            this.isError = true;
            this.isLoading = false;
        }


    }
}
</script>

<style scoped>

</style>
```

## 15-4- 搜索案例

### 15-4-1- 静态页面

* 将bootstrap.css放置到public目录

* public->index.html

  ```html
  <!DOCTYPE html>
  <html lang="">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <link rel="icon" href="<%= BASE_URL %>favicon.ico">
      <title><%= htmlWebpackPlugin.options.title %></title>
  	  <link rel="stylesheet" href="/bootstrap.css">
    </head>
    <body>
      <noscript>
        <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
      </noscript>
      <div id="app"></div>
      <!-- built files will be auto injected -->
    </body>
  </html>
  
  ```

* src->App.vue

  ```vue
  <template>
      <div data-reactroot="" class="container">
          <section class="jumbotron">
              <h3 class="jumbotron-heading">Search Github Users</h3>
              <div><input type="text" placeholder="enter the name you search"><button>Search</button></div>
          </section>
          <div class="row">
              <div class="card"><a href="https://github.com/aa" target="_blank"><img
                      src="https://avatars1.githubusercontent.com/u/28438?v=4" style="width: 100px;"></a>
                  <p class="card-text">aa</p>
              </div>
          </div>
      </div>
  </template>
  
  <script>
  export default {
      name: "App"
  }
  </script>
  
  <style scoped>
  .album {
      min-height: 50rem; /* Can be removed; just added for demo purposes */
      padding-top: 3rem;
      padding-bottom: 3rem;
      background-color: #f7f7f7;
  }
  
  .card {
      float: left;
      width: 33.333%;
      padding: .75rem;
      margin-bottom: 2rem;
      border: 1px solid #efefef;
      text-align: center;
  }
  
  .card > img {
      margin-bottom: .75rem;
      border-radius: 100px;
  }
  
  .card-text {
      font-size: 85%;
  }
  
  </style>
  ```

  

### 15-4-2- 拆分组件

* src->App.vue

  ```vue
  <template>
      <div data-reactroot="" class="container">
          <SearchHeader/>
          <SearchList/>
      </div>
  </template>
  
  <script>
  import SearchHeader from "@/components/SearchHeader";
  import SearchList from "@/components/SearchList";
  
  export default {
      name: "App",
      components: {
          SearchList,
          SearchHeader
      }
  }
  </script>
  
  <style scoped>
  
  
  </style>
  ```

  

* src->components->SearchHeader.vue

  ```vue
  <template>
      <section class="jumbotron">
          <h3 class="jumbotron-heading">Search Github Users</h3>
          <div><input type="text" placeholder="enter the name you search"><button>Search</button></div>
      </section>
  </template>
  
  <script>
  export default {
      name: "SearchHeader"
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

* src->components->SearchList.vue

  ```vue
  <template>
      <div class="row">
          <div class="card"><a href="https://github.com/aa" target="_blank"><img
                  src="https://avatars1.githubusercontent.com/u/28438?v=4" style="width: 100px;"></a>
              <p class="card-text">aa</p>
          </div>
      </div>
  </template>
  
  <script>
  export default {
      name: "SearchList"
  }
  </script>
  
  <style scoped>
  .album {
      min-height: 50rem; /* Can be removed; just added for demo purposes */
      padding-top: 3rem;
      padding-bottom: 3rem;
      background-color: #f7f7f7;
  }
  
  .card {
      float: left;
      width: 33.333%;
      padding: .75rem;
      margin-bottom: 2rem;
      border: 1px solid #efefef;
      text-align: center;
  }
  
  .card > img {
      margin-bottom: .75rem;
      border-radius: 100px;
  }
  
  .card-text {
      font-size: 85%;
  }
  </style>
  ```

  

### 15-4-3- 完成搜索

* src->main.js

  ```js
  import Vue from "vue";
  import App from "@/App";
  import request from "@/request";
  new Vue({
  	beforeCreate() {
  		Vue.use(request);
  		Vue.prototype.$bus = new Vue();
  	},
  	
  	render:h=>h(App)
  }).$mount("#app");
  ```

* src->compnents->SearchHeader.vue

  ```vue
  <template>
      <section class="jumbotron">
          <h3 class="jumbotron-heading">Search Github Users</h3>
          <div>
              <input ref="keyword" type="text" placeholder="enter the name you search">
              <button :disabled="isDisabled" @click="$bus.$emit('searchUser',$refs.keyword.value.trim())" >
                  {{isDisabled?"搜索中……":"搜索"}}
              </button>
          </div>
      </section>
  </template>
  
  <script>
  export default {
      name: "SearchHeader",
      data(){
          return {
              // 点击按钮后将其设置为true,得到结果以后更改为false
              isDisabled:false
          }
      },
      mounted(){
          this.$bus.$on("changeIsDisabled",(isDisabled)=>{
              this.isDisabled = isDisabled;
          })
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

* src->compnents->SearchList.vue

  ```vue
  <template>
      <div class="row">
          <h3 v-if="!isStart">您可以尝试输入搜索关键词，点击搜索按钮查找用户！</h3>
          <h3 v-else-if="isLoading">正在拼命加载中……</h3>
          <h3 v-else-if="isError">网络连接错误！</h3>
          <h3 v-else-if="items.length===0">搜索的结果为空！</h3>
          <template v-else>
              <div v-for="item in items" :key="item.id" class="card">
                  <a :href="item.html_url" target="_blank">
                      <img :src="item.avatar_url" style="width: 100px;">
                  </a>
                  <p class="card-text">{{item.login}}</p>
              </div>
          </template>
  
      </div>
  </template>
  
  <script>
  export default {
      name: "SearchList",
      data(){
          return {
              isLoading:false,// 是否加载
              isStart:false,// 是否进行过搜索（是否点击了搜索按钮）
              isError:false,// 是否有异常
              items:[]
          }
      },
      watch:{
          isLoading(newValue){
              this.$bus.$emit("changeIsDisabled",newValue);
          }
      },
      methods:{
          async searchUser(q){
              if(q.length === 0){
                  alert("请输入搜索的关键词");
                  return;
              }
              this.isStart = true;
              this.isLoading = true;
              this.isError = false;
              setTimeout(async ()=>{
                  try{
                      const res = await  this.$axios.get("/search/users",{
                          params:{
                              q,
                              sort:"stars"
                          }
                      });
                      this.isLoading = false;
                      this.items = res.items.map(item=>{
                          const {id,avatar_url,login,html_url} = item;
                          return {
                              id,
                              avatar_url,
                              login,
                              html_url
                          }
                      })
                  }catch (err){
                      this.isLoading = false;
                      this.isError = true;
                  }
              },3000)
  
  
          }
      },
      mounted(){
          // 1
          // this.$bus.$on("searchUser",(keyword)=>{
          //     this.searchUser(keyword);
          // })
  
          // 2
          this.$bus.$on("searchUser",this.searchUser)
      }
  }
  </script>
  
  <style scoped>
  .album {
      min-height: 50rem; /* Can be removed; just added for demo purposes */
      padding-top: 3rem;
      padding-bottom: 3rem;
      background-color: #f7f7f7;
  }
  
  .card {
      float: left;
      width: 33.333%;
      padding: .75rem;
      margin-bottom: 2rem;
      border: 1px solid #efefef;
      text-align: center;
  }
  
  .card > img {
      margin-bottom: .75rem;
      border-radius: 100px;
  }
  
  .card-text {
      font-size: 85%;
  }
  </style>
  ```

  

## 15-5- 卖座网案例

* src->request->index.js

  ```js
  import axios from "axios";
  
  const request = axios.create({
  	baseURL:"https://m.maizuo.com",
  	timeout:100000,
  	headers:{
  		"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16750477484798805614526465","bc":"310100"}',
  		"X-Host": "mall.film-ticket.film.list"
  	}
  })
  request.interceptors.response.use(res=>res.data);
  // export default request;
  export default function(Vue){
  	Vue.prototype.$axios = request;
  }
  ```

* src->App.vue

  ```vue
  <template>
      <div>
          <nav>
              <a href="" @click.prevent="type=1" :class="{active:type===1}">正在热映</a>|
              <a href="" @click.prevent="type=2" :class="{active:type===2}">即将上映</a>
          </nav>
          <hr/>
          <div>
              <button v-show="pageNum!==1" @click="pageNum--">上一页</button>
              {{pageNum}}/{{pageSum}}
              <button v-show="pageNum !== pageSum" @click="pageNum++">下一页</button>
          </div>
          <hr/>
          <h3 v-if="isLoading">正在加载中……</h3>
          <template v-else>
              <div v-for="item in films" :key="item.filmId">
                  <a target="_blank" :href="'https://m.maizuo.com/v5/#/film/'+item.filmId">
                      <img width="200" :src="item.poster"/>
                      <p>{{item.name}}</p>
                  </a>
                  <hr/>
              </div>
          </template>
  
      </div>
  </template>
  
  <script>
  export default {
      name: "App",
      data() {
          return {
              type: 1,
              isLoading:false,
              pageSize:2,// 每页显示的条数
              pageSum:1,// 总页数
              pageNum:1,// 当前页
              films:[]
          }
      },
      methods: {
          async geteway() {
              // pageSize:每页显示的条数
              // pageNum:页码
              this.isLoading = true;
              const res = await this.$axios("/gateway?cityId=310100",{
                  params:{
                      type:this.type,
                      pageSize:this.pageSize,
                      pageNum:this.pageNum,
                      k:Date.now()
                  }
              });
              this.films = res.data.films;
              this.isLoading=false;
              this.pageSum = Math.ceil(res.data.total/this.pageSize);// 计算总页数
              console.log(res);
  
          }
      },
      watch:{
          type(){
              this.geteway();
          },
          pageNum(){
              this.geteway();
          }
      },
      mounted() {
          this.geteway();
      }
  }
  </script>
  
  <style scoped>
  nav a {
      margin: 20px;
  }
  
  nav a.active {
      color: red;
  }
  </style>
  ```

  

## 15-6- 猫眼数据获取（跨域）

* src->request->index.js

  ```js
  import axios from "axios";
  
  const request = axios.create({
  	baseURL:"/api",
  	timeout:100000,
  })
  request.interceptors.response.use(res=>res.data);
  // export default request;
  export default function(Vue){
  	Vue.prototype.$axios = request;
  }
  ```

* vue.config.js

  ```js
  const {defineConfig} = require('@vue/cli-service')
  module.exports = defineConfig({
  	transpileDependencies: true,
      devServer:{
  		host:"zhangpeiyue.com",
  	    port:80,
          open:true,
  	    // https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=上海&ci=10&channelId=4
  	    
  	    // this.$axios("/api/a")
  	    // https://i.maoyan.com/api/a
  	    proxy:{
  			"/api":{
  				target:"https://i.maoyan.com",
  				changeOrigin:true
  			}
  	    }
      }
  })
  
  ```

* src->App.vue

  ```vue
  <template>
      <div>
      </div>
  </template>
  <script>
      export default {
          name:"App",
          data(){
              return {
                  hotList:[]
              }
          },
          mounted(){
              // /api/a
              this.$axios.get("/mmdb/movie/v3/list/hot.json?ct=上海&ci=10&channelId=4")
                      .then(value=>{
                          console.log(value.data.hot);
                          this.hotList = value.data.hot;
                      })
          }
      }
  </script>
  ```

# 十六- 路由

> 路由：地址与组件之间的一个映射关系。
>
> route:一个路由
>
> routes:一组路由（多个路由）
>
> router:路由的管理者
>
> 在Vue中需要通过vue-router模块实现路由，如果脚手架中已经安装了该插件，无需要下载安装。如果安装脚手架时未选择该插件，需要手动安装：cnpm install vue-router

## 16-1- 路由的基本使用

> /-------------------------------------------->首页
>
> /newsList--------------------------------->新闻列表
>
> /goodsList-------------------------------->商品列表
>
> /my----------------------------------------->个人中心
>
> /alskdjf------------------------------------->404

* src->main.js

  ```js
  import Vue from "vue";
  // 1- 引入vue-router
  import VueRouter from "vue-router";
  import App from "@/App";
  import Home from "@/views/Home";
  import NewsList from "@/views/NewsList";
  import GoodsList from "@/views/GoodsList";
  import My from "@/views/My";
  import NotFound from "@/views/NotFound";
  import MyHeader from "@/views/MyHeader";
  import MyList from "@/views/MyList";
  // 2- 将VueRouter作为插件使用
  Vue.use(VueRouter);
  // 3- 配置路由
  const router = new VueRouter({
  	base:"m",// 为地址增加前缀
  	mode:"history",// hash(默认) history
  	routes:[
  		{
  			path:"/",
  			component:Home
  		},{
  			path:"/newsList",
  			// 地址别名：也可以通过地址/one来渲染该路由组件
  			// alias:"/one",// 指定一个别名
  			alias:["/two","/three"],// 指定多个别名
  			component:NewsList
  		},{
  			path:"/goodsList",
  			component:GoodsList
  		},{
  			path:"/my",
  			// component:My,
  			// 单页面多路由：一个地址，可以指定多个路由组件
  			components:{
  				myHeader:MyHeader,
  				myList:MyList,
  				default:My
  			}
  		},{
  			// 当地址为/home,被重定向至地址为/的路由
  			path:"/home",
  			redirect:"/"
  		}
  		,{
  			path:"*",
  			component:NotFound
  		}
  		
  	]
  })
  new Vue({
  	// 4- 应用路由
  	router,
  	render:h=>h(App)
  }).$mount("#app");
  // 5- 在App组件中指定路由呈现的位置
  //    <router-view></router-view>
  ```

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>App组件</h3>
          <hr/>
          <router-view name="myHeader"></router-view>
          <hr/>
          <router-view name="myList"></router-view>
          <hr/>
          <router-view></router-view>
          <hr/>
          <router-view></router-view>
      </div>
  
  </template>
  
  <script>
  export default {
      name: "App"
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

## 16-2- 抽离路由的配置

* src->router->index.js

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "@/views/Home";
  import NewsList from "@/views/NewsList";
  import GoodsList from "@/views/GoodsList";
  import MyHeader from "@/views/MyHeader";
  import MyList from "@/views/MyList";
  import My from "@/views/My";
  import NotFound from "@/views/NotFound";
  Vue.use(VueRouter);
  const routes = [
  	{
  		path:"/",
  		component:Home
  	},{
  		path:"/newsList",
  		// 地址别名：也可以通过地址/one来渲染该路由组件
  		// alias:"/one",// 指定一个别名
  		alias:["/two","/three"],// 指定多个别名
  		component:NewsList
  	},{
  		path:"/goodsList",
  		component:GoodsList
  	},{
  		path:"/my",
  		// component:My,
  		// 单页面多路由：一个地址，可以指定多个路由组件
  		components:{
  			myHeader:MyHeader,
  			myList:MyList,
  			default:My
  		}
  	},{
  		// 当地址为/home,被重定向至地址为/的路由
  		path:"/home",
  		redirect:"/"
  	}
  	,{
  		path:"*",
  		component:NotFound
  	}
  
  ];
  export default new VueRouter({
  	base:"m",// 为地址增加前缀
  	mode:"history",// hash(默认) history
  	routes,
  });
  ```

* src->main.js

  ```js
  import Vue from "vue";
  import router from "@/router";
  import App from "@/App";
  new Vue({
  	router,
  	render:h=>h(App)
  }).$mount("#app");
  ```

## 16-3- 增加链接高亮

### 16-3-1- 通过样式控制高亮

```vue
<template>
    <div>
<!--
以个人中心举例：
  /my   ---------精确匹配上（router-link-exact-active router-link-active）
  /my/a ---------非精确匹配（router-link-active）
  /mya  ---------不匹配
以首页举例
    /------------精确匹配（router-link-exact-active router-link-active）
    /my----------非精确匹配（router-link-active）
-->
        <nav>
            <router-link to="/">首页</router-link>|
            <router-link to="/newsList">新闻列表</router-link>|
            <router-link to="/goodsList">商品列表</router-link>|
            <router-link to="/my">个人中心</router-link>
        </nav>

        <hr/>
        <router-view name="myHeader"></router-view>
        <hr/>
        <router-view name="myList"></router-view>
        <hr/>
        <router-view></router-view>
        <hr/>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    name: "App"
}
</script>

<style lang="less" scoped>
    nav {
        text-align: center;
        a{
            margin:5px;
            padding:5px;
            color:skyblue;
        }
        // 非精确匹配
        //.router-link-active{
        //    color:red;
        //}

        // 精确匹配
        .router-link-exact-active{
            color:red;
        }
    }
</style>
```



### 16-3-2- 通过view-link属性控制高亮

* src->App.vue

  ```vue
  <template>
      <div>
          <nav>
              <!--  exact-active-class:与地址精确匹配样式才会起效果。 active-class：在非精确匹配时也起效果         -->
  <!--            <router-link exact-active-class="a-active" to="/">首页</router-link>|-->
              <!-- exact:值是一个布尔，默认为true,指定为精确匹配。           -->
              <router-link exact active-class="a-active" to="/">首页</router-link>|
              <router-link active-class="a-active" to="/newsList">新闻列表</router-link>|
              <router-link active-class="a-active" to="/goodsList">商品列表</router-link>|
              <router-link active-class="a-active" to="/my">个人中心</router-link>
          </nav>
  
          <hr/>
          <router-view name="myHeader"></router-view>
          <hr/>
          <router-view name="myList"></router-view>
          <hr/>
          <router-view></router-view>
          <hr/>
          <router-view></router-view>
      </div>
  
  </template>
  
  <script>
  export default {
      name: "App"
  }
  </script>
  
  <style lang="less" scoped>
      nav {
          text-align: center;
          a{
              margin:5px;
              padding:5px;
              color:skyblue;
          }
          .a-active{
              color:red;
          }
      }
  </style>
  ```

  

### 16-3-3- 通过路由配置控制高亮

* src->App.vue

  ```vue
  <template>
      <div>
          <nav>
  <!--            <router-link exact to="/">首页</router-link>|-->
              <router-link  to="/">首页</router-link>|
              <router-link  to="/newsList">新闻列表</router-link>|
              <router-link  to="/goodsList">商品列表</router-link>|
              <router-link  to="/my">个人中心</router-link>
          </nav>
  
          <hr/>
          <router-view name="myHeader"></router-view>
          <hr/>
          <router-view name="myList"></router-view>
          <hr/>
          <router-view></router-view>
          <hr/>
          <router-view></router-view>
      </div>
  
  </template>
  
  <script>
  export default {
      name: "App"
  }
  </script>
  
  <style lang="less" scoped>
      nav {
          text-align: center;
          a{
              margin:5px;
              padding:5px;
              color:skyblue;
          }
          .a-active{
              color:red;
          }
      }
  </style>
  ```

* src->router->index.js

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "@/views/Home";
  import NewsList from "@/views/NewsList";
  import GoodsList from "@/views/GoodsList";
  import MyHeader from "@/views/MyHeader";
  import MyList from "@/views/MyList";
  import My from "@/views/My";
  import NotFound from "@/views/NotFound";
  Vue.use(VueRouter);
  const routes = [
  	{
  		path:"/",
  		component:Home
  	},{
  		path:"/newsList",
  		// 地址别名：也可以通过地址/one来渲染该路由组件
  		// alias:"/one",// 指定一个别名
  		alias:["/two","/three"],// 指定多个别名
  		component:NewsList
  	},{
  		path:"/goodsList",
  		component:GoodsList
  	},{
  		path:"/my",
  		// component:My,
  		// 单页面多路由：一个地址，可以指定多个路由组件
  		components:{
  			myHeader:MyHeader,
  			myList:MyList,
  			default:My
  		}
  	},{
  		// 当地址为/home,被重定向至地址为/的路由
  		path:"/home",
  		redirect:"/"
  	}
  	,{
  		path:"*",
  		component:NotFound
  	}
  
  ];
  export default new VueRouter({
  	// base:"m",// 为地址增加前缀
  	mode:"history",// hash(默认) history
  	// linkActiveClass:"a-active",
  	linkExactActiveClass:"a-active",// 只有请求地址与to属性值精确匹配才会使用该样式
  	routes,
  });
  ```

  

## 16-4- 路由传递参数

### 16-4-1- to的两种类型

* src->App.vue

  ```vue
  <template>
      <div class="container">
          <nav>
              <!-- 1- to的类型是一个字符串 -->
  <!--            <router-link class="a-link" exact active-class="a-active" to="/">首页</router-link>|-->
  <!--            <router-link class="a-link" active-class="a-active" to="/one">One</router-link>|-->
  <!--            <router-link class="a-link" active-class="a-active" to="/two">Two</router-link>|-->
  <!--            <router-link class="a-link" active-class="a-active" to="/three">Three</router-link>-->
  
              <!-- 2- to的类型是一个对象-path -->
  <!--            <router-link class="a-link" exact active-class="a-active" :to="{path:'/'}">首页</router-link>|-->
  <!--            <router-link class="a-link" active-class="a-active" :to="{path:'/one'}">One</router-link>|-->
  <!--            <router-link class="a-link" active-class="a-active" :to="{path:'/two'}">Two</router-link>|-->
  <!--            <router-link class="a-link" active-class="a-active" :to="{path:'/three'}">Three</router-link>-->
              
              <!-- 3- to的类型是一个对象-name -->
              <router-link class="a-link" exact active-class="a-active" :to="{name:'home'}">首页</router-link>|
              <router-link class="a-link" active-class="a-active" :to="{name:'one'}">One</router-link>|
              <router-link class="a-link" active-class="a-active" :to="{name:'o'}">Two</router-link>|
              <router-link class="a-link" active-class="a-active" :to="{name:'three'}">Three</router-link>
          </nav>
          <router-view></router-view>
      </div>
  </template>
  
  <script>
  export default {
      name: "App"
  }
  </script>
  
  <style lang="less" scoped>
      .container{
          text-align: center;
          nav{
              .a-link{
                  margin:10px;
                  padding:5px;
                  color:skyblue;
              }
              .a-active{
                  color:red;
              }
          }
      }
  </style>
  ```

* src->router->index.js

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "@/views/Home";
  import One from "@/views/One";
  import Two from "@/views/Two";
  import Three from "@/views/Three";
  Vue.use(VueRouter);
  // 路由的容器
  const routes = [
  	{
  		path:"/",
  		name:"home",
  		component:Home
  	},
  	{
  		path:"/one",
  		name:"one",
  		component:One
  	},
  	{
  		path:"/two",
  		name:"o",
  		component:Two
  	},
  	{
  		path:"/three",
  		name:"three",
  		component:Three
  	}
  ];
  export default new VueRouter({
  	mode:"history",
  	routes
  })
  ```

  

### 16-4-2- query传递参数

* 如何传

  * src->App.vue

    ```vue
     <router-link class="a-link" active-class="a-active" to="/one?a=1&b=2">One1</router-link>|
                <router-link class="a-link" active-class="a-active" :to="{
                    path:'/one',
                    query:{
                        a:11,
                        b:22,
                        c:{userName:'zhangsan'}
                    }
                }">One2</router-link>|
                <router-link class="a-link" active-class="a-active" :to="{
                    name:'one',
                    query:{
                        a:31,
                        b:32
                    }
                }">One3</router-link>|
    ```

* 如何接收

  * src->views->One.vue

    ```vue
    <template>
        <div>
            <h3>One组件</h3>
            <p>a:{{$route.query.a}}</p>
            <p>b:{{$route.query.b}}</p>
        </div>
    </template>
    
    <script>
    export default {
        name: "One",
        updated() {
            console.log("updated",this.$route);
        },
        mounted(){
            console.log(this.$route);
        }
    }
    </script>
    
    <style scoped>
    
    </style>
    ```

    

### 16-4-3- params传递参数未设置path

> 刷新数据会丢失

* 如何传递

  * src->App.vue

    ```vue
      <router-link class="a-link" active-class="a-active" :to='{
                    name:"o",
                    params:{
                        userName:"zhangsan",
                        age:12
                    }
                }'>Two1</router-link>
    
    ```

    

* 如何接收

  * src->views->Two.vue

    ```vue
    <template>
        <div>
            <h3>Two组件</h3>
            <p>userName:{{$route.params.userName}}</p>
            <p>age:{{$route.params.age}}</p>
        </div>
    </template>
    
    <script>
    export default {
        name: "Two",
        mounted(){
            console.log(this.$route);
        }
    }
    </script>
    
    <style scoped>
    
    </style>
    ```

    

### 16-4-4- params传递参数设置path

* 如何传递参数

  * src->App.vue

    ```vue
     <router-link class="a-link"
                             active-class="a-active"
                             to="/three/zhangsan/100">Three1</router-link>|
                <router-link class="a-link"
                             active-class="a-active"
                             :to="{
                                path:'/three/lisi/200'
                             }">Three2</router-link>
    ```

    

  * src->router->index.js

    ```js
    import Vue from "vue";
    import VueRouter from "vue-router";
    import Home from "@/views/Home";
    import One from "@/views/One";
    import Two from "@/views/Two";
    import Three from "@/views/Three";
    Vue.use(VueRouter);
    // 路由的容器
    const routes = [
    	{
    		path:"/",
    		name:"home",
    		component:Home
    	},
    	{
    		path:"/one",
    		name:"one",
    		component:One
    	},
    	{
    		path:"/two",
    		name:"o",
    		component:Two
    	},
    	{
    		path:"/three/:userName/:age",
    		name:"three",
    		component:Three
    	}
    ];
    export default new VueRouter({
    	mode:"history",
    	routes
    })
    ```

    

* 如何接收参数

  * src->views->Three.vue

    ```vue
    <template>
        <div>
            <h3>Three组件</h3>
            <p>userName:{{$route.params.userName}}</p>
            <p>age:{{$route.params.age}}</p>
        </div>
    </template>
    
    <script>
    export default {
        name: "Three",
        mounted(){
            console.log(this.$route);
        }
    }
    </script>
    
    <style scoped>
    
    </style>
    ```

    

### 16-4-5- 传递参数应用

* src->Home.vue

  ```vue
  <template>
      <div>
          <div v-for="item in items" :key="item.id">
              <p><router-link :to="'/details/'+item.login+'.html'">{{item.login}}</router-link></p>
          </div>
      </div>
  </template>
  
  <script>
  export default {
      name: "Home",
      data(){
          return {
              items:[]
          }
      },
      mounted() {
          this.$axios.get("/search/users?q=r&sort=stars").then(({items})=>{
              this.items = items;
              console.log(items);
          })
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

* src->views->Details.vue

  ```vue
  <template>
      <div>
          <h3>{{info.login}}</h3>
          <img :src="info.avatar_url" alt="">
      </div>
  </template>
  
  <script>
  export default {
      name: "Details",
      data(){
          return {
              info:{}
          }
      },
      mounted(){
          this.$axios.get("/users/"+this.$route.params.login).then(res=>{
              this.info = res;
              console.log(res);
          })
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

* src->request->index.js

  ```js
  import axios from "axios";
  
  const request = axios.create({
  	baseURL:"https://api.github.com",
  	timeout:10000
  })
  request.interceptors.response.use(res=>res.data);
  export default {
  	install(Vue){
  		Vue.prototype.$axios = request;
  	}
  }
  ```

  

* src->router->index.js

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "@/views/Home";
  import One from "@/views/One";
  import Two from "@/views/Two";
  import Three from "@/views/Three";
  import Details from "@/views/Details";
  Vue.use(VueRouter);
  // 路由的容器
  const routes = [
  	{
  		path:"/",
  		name:"home",
  		component:Home
  	},
  	{
  		path:"/one",
  		name:"one",
  		component:One
  	},
  	{
  		path:"/two",
  		name:"o",
  		component:Two
  	},
  	{
  		path:"/three/:userName/:age",
  		name:"three",
  		component:Three
  	},{
  		path:"/details/:login.html",
  		component:Details
  	}
  	
  ];
  export default new VueRouter({
  	mode:"history",
  	routes
  })
  ```

## 16-5- 子路由

### 16-5-1- 基本使用

> /-------------------------------------------->首页
>
> /newsList--------------------------------->新闻列表
>
> 			/tiYue------------------------------>体育新闻
> 				
> 		  /yuLe------------------------------>娱乐新闻
> 				
> 	 /caiJing------------------------------>财经新闻
>
> /goodsList-------------------------------->商品列表
>
> /my----------------------------------------->个人中心
>
> /alskdjf------------------------------------->404

* router->index.js

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "@/views/Home";
  import GoodsList from "@/views/GoodsList";
  import NewsList from "@/views/NewsList";
  import My from "@/views/My";
  import NotFound from "@/views/NotFound";
  import Yule from "@/views/Yule";
  import TiYu from "@/views/TiYu";
  import CaiJing from "@/views/CaiJing";
  // 将VueRouter作为插件使用
  Vue.use(VueRouter);
  // 配置路由
  const routes = [
  	{
  		path:"/",
  		component:Home
  	},
  	
  	{
  		path:"/goodsList",
  		component:GoodsList
  	},
  	{// /newsList/tiYue
  		path:"/newsList",
  		name:"newsList",
  		component:NewsList,
  		children:[
  			{
  				// path:"/",
  				path:"/newsList",
  				redirect:"tiyu"
  			},
  			{
  				path:"tiyu",
  				name:"b",
  				component:TiYu
  			},
  			{
  				path:"yuLe",
  				name:"a",
  				component:Yule
  			},
  			{
  				path:"caijing",
  				name:"c",
  				component: CaiJing
  			}
  		]
  	},
  	{
  		path:"/home",
  		redirect:"/"
  	},
  	{
  		path:"/my",
  		component:My
  	},
  	{
  		path:"*",
  		component:NotFound
  	}
  ]
  export default new VueRouter({
  	mode:"history",
  	linkActiveClass:"a-active",
  	routes
  })
  ```

* src->App.vue

  ```vue
  <template>
      <div class="container">
          <nav>
              <router-link exact to="/">首页</router-link>|
              <router-link :to="{path:'/goodsList'}">商品列表</router-link>|
              <router-link :to="{path:'/newsList'}">新闻列表</router-link>|
              <router-link to="/my">个人中心</router-link>
          </nav>
          <hr/>
          <router-view></router-view>
      </div>
  </template>
  
  <script>
  export default {
      name: "App"
  }
  </script>
  
  <style lang="less">
      .container{
          text-align: center;
          nav{
              a{
                  margin:10px;
                  color:skyblue;
              }
              .a-active{
                  color:red;
              }
          }
      }
  </style>
  ```

* src->components->NewsList.vue

  ```vue
  <template>
      <div>
  <!--        <nav>-->
  <!--            <router-link to="/newsList/tiyu">体育新闻</router-link>|-->
  <!--            <router-link to="/newsList/yule">娱乐新闻</router-link>|-->
  <!--            <router-link to="/newsList/caijing">财经新闻</router-link>-->
  <!--        </nav>-->
  
  
  <!--        <nav>-->
  <!--            <router-link to="tiyu">体育新闻</router-link>|-->
  <!--            <router-link to="yule">娱乐新闻</router-link>|-->
  <!--            <router-link to="caijing">财经新闻</router-link>-->
  <!--        </nav>-->
  
  <!--        <nav>-->
  <!--            <router-link to="./tiyu">体育新闻</router-link>|-->
  <!--            <router-link to="./yule">娱乐新闻</router-link>|-->
  <!--            <router-link to="./caijing">财经新闻</router-link>-->
  <!--        </nav>-->
  
  <!--        <nav>-->
  <!--            <router-link :to="{path:'tiyu'}">体育新闻</router-link>|-->
  <!--            <router-link :to="{path:'/newsList/yule'}">娱乐新闻</router-link>|-->
  <!--            <router-link :to="{path:'caijing'}">财经新闻</router-link>-->
  <!--        </nav>-->
  
  <!--        <nav>-->
  <!--            <router-link :to="{name:'b'}">体育新闻</router-link>|-->
  <!--            <router-link :to="{name:'a'}">娱乐新闻</router-link>|-->
  <!--            <router-link :to="{name:'c'}">财经新闻</router-link>-->
  <!--        </nav>-->
  
          <nav>
              <router-link exact to="/newsList/tiyu">体育新闻</router-link>|
              <router-link to="/newsList/yule">娱乐新闻</router-link>|
              <router-link to="/newsList/caijing">财经新闻</router-link>
          </nav>
          <hr/>
          <router-view></router-view>
      </div>
  </template>
  
  <script>
  export default {
      name: "NewsList"
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

### 16-5-2- 卖座网案例

#### 16-5-2-1- 搭建路由-使用meta

* src->router->index.js

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  import NowPlaying from "@/views/NowPlaying";
  import ComingSoon from "@/views/ComingSoon";
  import Details from "@/views/Details";
  Vue.use(VueRouter);
  const routes = [
  	{
  		path:"/nowPlaying",
  		component:NowPlaying
  	},{
  		path:"/comingSoon",
  		component:ComingSoon
  	},{
  		path:"/:id",
  		component:Details,
  		meta:{
  			isHide:true,// 是否隐藏导航,
  		}
  	},{
  		path:"/",
  		redirect:"/nowPlaying",
  	}
  ];
  export default new VueRouter({
  	mode:"history",
  	linkActiveClass:"a-active",
  	// base:"/films",
  	base:process.env.BASE_URL,
  	routes
  })
  ```

* src->App.vue

  ```vue
  <template>
      <div class="container">
          <nav v-show="!$route.meta.isHide">
              <router-link to="/nowPlaying">正在热映</router-link>|
              <router-link to="/comingSoon">即将上映</router-link>
          </nav>
          <router-view></router-view>
      </div>
  </template>
  
  <script>
  export default {
      name: "App",
      updated(){
          console.log("updated",this.$route);
      }
  }
  </script>
  
  <style lang="less" scoped>
      .container{
          text-align: center;
          nav{
              a{
                  margin:10px;
                  color:skyblue;
              }
              .a-active{
                  color:red;
              }
          }
      }
  </style>
  ```

  

#### 16-5-2-2- 搭建路由-使用子路由

* src->router->index.js

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  import NowPlaying from "@/views/NowPlaying";
  import ComingSoon from "@/views/ComingSoon";
  import Details from "@/views/Details";
  import Index from "@/views/Index";
  Vue.use(VueRouter);
  const routes = [
  	{
  		path:"/",
  		component:Index,
  		children:[
  			{
  				path:"/comingSoon",
  				component:ComingSoon
  			},
  			{
  				path:"/nowPlaying",
  				component: NowPlaying
  			}
  		]
  	},
  	{
  		path:"/:id",
  		component: Details
  	}
  ];
  export default new VueRouter({
  	mode:"history",
  	linkActiveClass:"a-active",
  	// base:"/films",
  	base:process.env.BASE_URL,
  	routes
  })
  ```

* src->App.vue

  ```vue
  <template>
      <div class="container">
  
          <router-view></router-view>
      </div>
  </template>
  
  <script>
  export default {
      name: "App",
      updated(){
          console.log("updated",this.$route);
      }
  }
  </script>
  
  <style lang="less">
      .container{
          text-align: center;
          nav{
              a{
                  margin:10px;
                  color:skyblue;
              }
              .a-active{
                  color:red;
              }
          }
      }
  </style>
  ```

* src->views->Index.vue

  ```vue
  <template>
      <div>
          <nav>
              <router-link to="/nowPlaying">正在热映</router-link>|
              <router-link to="/comingSoon">即将上映</router-link>
          </nav>
          <router-view></router-view>
      </div>
  </template>
  
  <script>
  export default {
      name: "Index"
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

#### 16-5-2-3- 完成案例(略)

## 16-6- 路由守卫

#### 路由守卫的分类

> 全局（3个）beforeEach、beforeResolve、afterEach(是没有next放行函数的)
>
> 路由独享（1个）beforeEnter
>
> 组件守卫（3个）beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave

#### 路由守卫的函数参数主要包括哪几个？

to：路由跳转的目标

from：路由跳转的来源

next：放行函数

问题：next的函数参数，其数据类型有哪些？

- 没有参数
- 布尔类型
- 字符串
- 对象类型
- Error类型
- 函数类型

> 路由守卫：对路由的访问进行限制。
>
> * 路由组件内部守卫：
>
>   * beforeRouteEnter:进入路由之前执行。
>
>   * beforeRouteUpdate:参数更新之前执行。
>   * beforeRouteLeave:离开路由之前执行。
>
> * 全局路由守卫: router的属性
>
>   * beforeEach:全局前置守卫->进入路由之前执行-->最多
>   * afterEach：全局后置守卫->进入路由之后执行
>   * beforeResolve:全局解析守卫->进入路由前，参数更改前执行。
>
> * 路由独享守卫：路由配置信息中（routes）
>
>   *  beforeEnter:进入路由之前
>
> 

### 16-6-1- 组件内部守卫

* src->views->My.vue

  ```vue
  <template>
      <div>
          <h3>个人中心界面</h3>
          <button @click="outLogin">欢迎{{userName}}的到来，点此按钮可以退出</button>
          <hr/>
              <div v-for="item in cartList" :key="item.id">
                  <router-link :to="{path:'/my',query:{id:item.id}}">{{item.goodsName}}</router-link>
              </div>
          <hr/>
          <p>购物车商品ID：{{info.id}}</p>
          <p>购物车商品名称：{{info.goodsName}}</p>
          <p>购物车商品价格：{{info.goodsPrice}}</p>
  
      </div>
  
  </template>
  
  <script>
  export default {
      name: "My",
      data(){
          // const userName = localStorage.getItem("userName");
          // return {
          //     userName
          // }
  
          return {
              info:{},
              cartList:[
                  {
                      id:1,
                      goodsName:"笔记本电脑",
                      goodsPrice:100
                  }, {
                      id:2,
                      goodsName:"手机",
                      goodsPrice:50
                  }
              ]
          }
      },
      methods:{
          outLogin(){
              localStorage.removeItem("userName");
              this.$router.push("/login");
          }
      },
      computed:{
          userName(){
              return localStorage.getItem("userName");
          }
      },
      // to:去哪？当前路由信息
      // from:来自哪？路由信息
      beforeRouteEnter(to,from,next){
          // console.log("beforeRouteEnter",to,from);
          // next();// 放行
          // next(true);// 放行
          // next(false);// 不放行
  
          // next("/login");// 跳转至登陆界面
          // next({
          //     path:"/login"
          // })
          // next({
          //     name:"l"
          // })
  
          // console.log(this);// undefined
          // 如果接收的是一个函数，说明放行,该函数会在created之后执行
          // next(vc=>{
          //     console.log("abc",vc.userName)
          // })
          // console.log("over");
  
  
          if(localStorage.getItem("userName")) next();
          else next("/login")
      },
  
      beforeRouteUpdate(to,from,next){
          // to:可以获得更改以后的参数
          // from:可以获取更改之前的参数
          // beforeRouteUpdate:1 2
          // console.log("beforeRouteUpdate",this.$route.query.id,to.query.id,from.query.id);
          this.info = this.cartList.find(item=>item.id === to.query.id/1);
          next();
  
          // next(()=>{
          //     console.log("next")
          // })
      },
      // to:要去哪
      // from:当前路由信息
      beforeRouteLeave(to,from,next){
          // console.log("beforeRouteLeave",to,from);
          // console.log(this)
          // next();// 放行，允许离开
          // next(true);// 放行，允许离开
          // next(false);// 不放行，不允许离开
  
          if(window.confirm("您确定要离开该页面吗？")){
              next();
          }
      },
      beforeCreate() {
          // console.log("beforeCreate");
          // if(!localStorage.getItem("userName")){
          //     // 编程式导航
          //     // this.$router.push("/login");// router-link to
          //     this.$router.push({
          //         path:"/login"
          //     });// router-link to
          // }
          // return;
      },
      // created(){
      //     // console.log("created");
      // },
      // updated(){
      //     console.log("updated")
      // },
      mounted(){
          // console.log("mounted")
          // console.log(this.$route.query.id);
          const id = (this.$route.query.id || 1)/1;
          this.info = this.cartList.find(v=>v.id === id);
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

### 16-6-2- 路由独享守卫

* src->router->index.js

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Index from "@/views/Index";
  import Home from "@/views/Home";
  import NewsList from "@/views/NewsList";
  import GoodsList from "@/views/GoodsList";
  import My from "@/views/My";
  import Login from "@/views/Login";
  import NotFound from "@/views/NotFound";
  Vue.use(VueRouter);
  const routes = [
  	{
  		path:"/",
  		component:Index,
  		children:[
  			{
  				path:"/",
  				component:Home
  			},
  			{
  				path:"/newsList",
  				component:NewsList
  			},
  			{
  				path:"/goodsList",
  				component:GoodsList
  			},
  			{
  				path:"/my",
  				component:My,
  				// to:去哪一个路由
  				// from:来自于哪一个路由
  				beforeEnter(to,from,next){
  					// next();
  					// next(true);
  					// next(false);
  					
  					// console.log(this);
  					// next不支持接收函数
  					// next(vm=>{
  					// 	console.log(vm);
  					// })
  					if(localStorage.getItem("userName")){
  						next();
  					}else next("/login");
  					
  				}
  			}
  		]
  	},{
  		path:"/login",
  		name:"l",
  		component:Login
  	},{
  		path:"*",
  		component:NotFound
  	}
  ]
  export default new VueRouter({
  	mode:"history",
  	linkActiveClass:"a-active",
  	routes
  })
  ```

### 16-6-3- 全局守卫

* src->router->index.js

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Index from "@/views/Index";
  import Home from "@/views/Home";
  import NewsList from "@/views/NewsList";
  import GoodsList from "@/views/GoodsList";
  import My from "@/views/My";
  import Login from "@/views/Login";
  import NotFound from "@/views/NotFound";
  Vue.use(VueRouter);
  const routes = [
  	{
  		path:"/",
  		component:Index,
  		children:[
  			{
  				path:"/",
  				component:Home,
  				meta:{
  					title:"首页"
  				}
  			},
  			{
  				path:"/newsList",
  				component:NewsList,
  				meta:{
  					// isAuthorization:true
  					requiredAuthor:true,
  					title:"新闻列表页"
  				}
  				
  			},
  			{
  				path:"/goodsList",
  				component:GoodsList,
  				meta:{
  					requiredAuthor:true,
  					title:"商品列表页"
  				}
  				
  			},
  			{
  				path:"/my",
  				component:My,
  				meta:{
  					requiredAuthor:true,
  					title:"个人中心页"
  				}
  				
  				// to:去哪一个路由
  				// from:来自于哪一个路由
  				// beforeEnter(to,from,next){
  				// 	// next();
  				// 	// next(true);
  				// 	// next(false);
  				//
  				// 	// console.log(this);
  				// 	// next不支持接收函数
  				// 	// next(vm=>{
  				// 	// 	console.log(vm);
  				// 	// })
  				// 	// if(localStorage.getItem("userName")){
  				// 	// 	next();
  				// 	// }else next("/login");
  				//
  				// }
  			}
  		]
  	},{
  		path:"/login",
  		name:"l",
  		component:Login
  	},{
  		path:"*",
  		component:NotFound
  	}
  ]
  const router =  new VueRouter({
  	mode:"history",
  	linkActiveClass:"a-active",
  	routes
  });
  
  // 全局前置守卫：进入路由之前
  // router.beforeEach(function(to,from,next){
  // 	// console.log("router->beforeEach",to.meta.requiredAuthor);
  // 	// console.log(to.fullPath);
  //
  // 	if(to.meta.requiredAuthor){
  // 		if(localStorage.getItem("userName")) next();
  // 		else {
  // 			// localStorage.setItem("pathLog",to.fullPath);
  // 			next("/login?callback="+to.fullPath);
  // 		}
  // 	}else next();
  // });
  
  // 全局后置守卫：进入路由之后(beforeRouteEnter之后，beforeCreate之前)
  // next
  // router.afterEach(function(to,from,next){
  // 	// console.log("afterEach",next);
  // 	document.title = to.meta.title;
  // })
  
  // 全局解析守卫:参数更新前，进入路由前
  router.beforeResolve(function(to,from,next){
  	console.log(to,from);
  	next();
  })
  export default router;
  ```

## 16-7-综合案例

# 十七- `Vuex`

## 17-1- 理解`Vuex`

### 17-1-1- `Vuex`是什么

> `Vuex`是专门在`Vue`中实现集中式状态（数据）管理的一个`Vue`插件，对`vue`应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。

什么是vuex？vuex包含了哪些部分？你对于vuex的理解是如何的？

vuex是状态管理器，是只有一个仓库只有一棵状态树的唯一仓库状态管理器。（统一仓库管理）

vuex主要包括了6大部分：

> |           |          |              |          |                    |          |
> | --------- | -------- | ------------ | -------- | ------------------ | -------- |
> | 内容      | 说明     | 映射         | 位置     | 补充               | 问题     |
> | state     | 设置状态 | mapState     | computed |                    |          |
> | getters   | 获取内容 | mapGetters   | computed |                    | computed |
> | mutations | 修改数据 | mapMutations | methods  | commit             |          |
> | actions   | 异步操作 | mapActions   | methods  | dispatch           |          |
> | modules   | 模块拆分 |              |          | namespaced命名空间 |          |
> | plugins   | 插件辅助 |              |          |                    |          |

### 17-1-2- 什么时候使用`Vuex`

> 多个组件要进行状态的共享

### 17-1-3- `Vuex`工作原理图

<img src="assets\wps2.jpg" alt="img" style="zoom:150%;" /> 

## 17- 2- Vuex的基本使用

### 17-2-1- 实现数据共享

* src->main.js

  ```js
  import Vue from "vue";
  // 1- 检查脚手架配置是否安装了vuex.如果未安装执行命令：cnpm install vuex
  // 2- 引入vuex
  import Vuex from "vuex";
  // 3- 安装插件
  Vue.use(Vuex);
  // 4- 生成仓库。
  const store = new Vuex.Store({
  	state:{
  		num:1
  	}
  })
  import App from "@/App";
  new Vue({
  	store,// 应用仓库(注册仓库)
  	render:h=>h(App)
  }).$mount("#app");
  ```

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>App</h3>
          <button @click="$store.state.num++">{{$store.state.num}}</button>
          <hr/>
          <One></One>
          <hr/>
          <Child/>
      </div>
  </template>
  
  <script>
  import One from "@/components/One";
  import Child from "@/components/Child";
  export default {
      name: "App",
      components:{
          One,
          Child
      },
      mounted(){
          console.log(this.$store)
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

* src->components->One.vue

  ```vue
  <template>
      <div>
          <h3>One</h3>
          <button @click="$store.state.num++">{{$store.state.num}}</button>
      </div>
  </template>
  
  <script>
  export default {
      name: "One"
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

* src->components->Child.vue

  ```vue
  <template>
      <div>
          <h3>Child</h3>
          <button @click="$store.state.num++">{{$store.state.num}}</button>
      </div>
  </template>
  
  <script>
  export default {
      name: "Child"
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

### 17-2-2- 抽离store

* src->main.js

  ```js
  import Vue from "vue";
  import store from "@/store";
  import App from "@/App";
  new Vue({
  	store,// 应用仓库(注册仓库)
  	render:h=>h(App)
  }).$mount("#app");
  ```

* src->store->index.js

  ```js
  import Vue from "vue";
  // 1- 检查脚手架配置是否安装了vuex.如果未安装执行命令：cnpm install vuex
  // 2- 引入vuex
  import Vuex from "vuex";
  // 3- 安装插件
  Vue.use(Vuex);
  // 4- 生成仓库。
  const store = new Vuex.Store({
  	state:{
  		num:1
  	}
  });
  export default store;
  ```

## 17-3- 完成投票案例

### 17-3-1- 获取数据状态-state

* src->store->index.js

  ```js
  import Vue from "vue";
  import Vuex from "vuex";
  Vue.use(Vuex);
  const state = {
  	liuDeHua:10,
  	zhangXueYou:20,
  	liMing:30,
  	guoFuCheng:40
  }
  const store = new Vuex.Store({
  	state
  })
  export default store;
  ```

* src->main.js

  ```js
  import Vue from "vue";
  import store from "@/store";
  import App from "@/App";
  new Vue({
  	el:"#app",
  	store,
  	render:h=>h(App)
  })
  ```

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>App</h3>
          <button>刘德华：{{this.$store.state.liuDeHua}}</button>
          <button>张学友：{{this.$store.state.zhangXueYou}}</button>
          <button>郭富城：{{this.$store.state.guoFuCheng}}</button>
          <button>黎明：{{this.$store.state.liMing}}</button>
      </div>
  </template>
  
  <script>
  export default {
      name: "App",
      mounted(){
          console.log(this.$store)
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

### 17-3-2- state的简写

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>App</h3>
          <button>刘德华：{{$store.state.liuDeHua}}|{{liuDeHua}}|{{a}}</button>
          <button>张学友：{{$store.state.zhangXueYou}}|{{zhangXueYou}}|{{b}}</button>
          <button>郭富城：{{$store.state.guoFuCheng}}|{{guoFuCheng}}|{{c}}</button>
          <button>黎明：{{$store.state.liMing}}|{{liMing}}|{{d}}</button>
      </div>
  </template>
  
  <script>
  import {mapState} from "vuex";
  export default {
      name: "App",
      // 1-以下简写方式：只可以获取，但修改数据视图不会更新。
      // data(){
      //     const {liuDeHua,liMing,guoFuCheng,zhangXueYou} = this.$store.state;
      //     return {
      //         liMing,
      //         liuDeHua,
      //         zhangXueYou,
      //         guoFuCheng
      //     }
      // }
      // 2-以下简写方式，可以实现读取，当数据发生改变视图也会更新。
      // computed:{
      //     zhangXueYou(){
      //         return this.$store.state.zhangXueYou
      //     },
      //     liMing(){
      //         return this.$store.state.liMing
      //     },
      //     guoFuCheng(){
      //         return this.$store.state.guoFuCheng
      //     },
      //     liuDeHua(){
      //         return this.$store.state.liuDeHua
      //     }
      // }
      // 3- 官提供的方案：mapState与computed结合使用
      // 3-1- 引入 import {mapState} from "vuex";
      // 3-2- mapState接收数组,数组的元素是字符串，字符串的内容即是状态的属性名
      // computed:mapState(["liuDeHua","zhangXueYou","guoFuCheng","liMing"]),
      // 3-3- mapState接收对象
      // computed:mapState({
      //     a(state){
      //         // console.log(this.$store.state === state);// true
      //         // return this.$store.state.liuDeHua
      //         return state.liuDeHua;
      //     },
      //     b({zhangXueYou}){
      //         return zhangXueYou
      //     },
      //     c:state=>state.guoFuCheng,
      //     d:({liMing})=>liMing
      // })
  
      // 数组与对象一起使用
      computed:{
          ...mapState(["liuDeHua","zhangXueYou","guoFuCheng","liMing"]),
          ...mapState({
              a(state){
                  // console.log(this.$store.state === state);// true
                  // return this.$store.state.liuDeHua
                  return state.liuDeHua;
              },
              b({zhangXueYou}){
                  return zhangXueYou
              },
              c:state=>state.guoFuCheng,
              d:({liMing})=>liMing
          })
      },
  
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

### 17-3-3- state简写的实现原理（了解）

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>App</h3>
          <button>刘德华：{{$store.state.liuDeHua}}|{{liuDeHua}}|{{a}}</button>
          <button>张学友：{{$store.state.zhangXueYou}}|{{zhangXueYou}}|{{b}}</button>
          <button>郭富城：{{$store.state.guoFuCheng}}|{{guoFuCheng}}|{{c}}</button>
          <button>黎明：{{$store.state.liMing}}|{{liMing}}|{{d}}</button>
      </div>
  </template>
  
  <script>
  function mapState(arg){
      // arg==>["liuDeHua","liMing","guoFuCheng","zhangXueYou"]
      let obj = {};
      if(arg instanceof Array){
          arg.forEach(key=>{
              obj[key] = function(){
                  return this.$store.state[key]
              }
          })
      }else{
          // ["a","b","c","d"]
          Object.keys(arg).forEach(key=>{
              obj[key] = function(){
                  return arg[key](this.$store.state)
              }
          })
      }
      return obj;
  }
  
  
  export default {
      name: "App",
      // computed:mapState(["liuDeHua","liMing","guoFuCheng","zhangXueYou"])
      computed:{
          ...mapState(["liuDeHua","liMing","guoFuCheng","zhangXueYou"]),
          ...mapState({
              a(state){
                  // console.log(this.$store.state === state);// true
                  // return this.$store.state.liuDeHua
                  return state.liuDeHua;
              },
              b({zhangXueYou}){
                  return zhangXueYou
              },
              c:state=>state.guoFuCheng,
              d:({liMing})=>liMing
          }),
          // a(){
          //     return this.$store.state.liuDeHua
          // },
          // b(){
          //     return this.$store.state.zhangXueYou
          // },
          // c(){
          //     return this.$store.state.guoFuCheng
          // },
          // d(){
          //     return this.$store.state.liMing
          // }
      }
  
      // computed:{
      //     liuDeHua(){
      //         return this.$store.state.liuDeHua
      //     },
      //     guoFuCheng(){
      //         return this.$store.state.guoFuCheng
      //     },
      //     liMing(){
      //         return this.$store.state.liMing
      //     },
      //     zhangXueYou(){
      //         return this.$store.state.zhangXueYou
      //     }
      // }
  
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

### 17-3-4- 投票加1-不推荐直接操作数据

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>App</h3>
          <button @click="$store.state.liuDeHua++">刘德华：{{liuDeHua}}</button>
          <button @click="$store.state.zhangXueYou++">张学友：{{zhangXueYou}}</button>
          <button @click="$store.state.guoFuCheng++">郭富城：{{guoFuCheng}}</button>
          <button @click="$store.state.liMing++">黎明：{{liMing}}</button>
      </div>
  </template>
  
  <script>
  import {mapState} from "vuex";
  export default {
      name: "App",
      computed:mapState(["liuDeHua","liMing","guoFuCheng","zhangXueYou"])
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

### 17-3-5- 通过mutations操作数据

* src->store->index.js

  ```js
  import Vue from "vue";
  import Vuex from "vuex";
  Vue.use(Vuex);
  const state = {
  	liuDeHua:10,
  	zhangXueYou:20,
  	liMing:30,
  	guoFuCheng:40
  }
  // 1- mutations类型是一个对象
  // 2- mutations的职责是同步更新数据状态
  // 3- mutations对象的属性类型均是方法，方法的名字建议大写，多个单词之间使用_分割
  const mutations = {
  	// 第一个参数是数据状态，第二个参数是定义的参数
  	// CHANGE_LIU_DE_HUA(state,{a,b,c,d}){
  	// 	console.log("CHANGE_LIU_DE_HUA",a,b,c,d);
  	// }
  	
  	
  	UP_LIU_DE_HUA(state,num=1){
  		state.liuDeHua+=num;
  	},
  	UP_ZHANG_XUE_YOU(state,num=1){
  		state.zhangXueYou+=num;
  	},
  	UP_LI_MING(state,num=1){
  		state.liMing+=num;
  	},
  	UP_GUO_FU_CHENG(state,num=1){
  		state.guoFuCheng+=num;
  	}
  }
  const store = new Vuex.Store({
  	state,// 数据状态
  	mutations// 用于更改数据状态
  })
  export default store;
  ```

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>App</h3>
          <button @click="$store.commit('UP_LIU_DE_HUA',2)">刘德华：{{liuDeHua}}</button>
          <button @click="$store.commit('UP_ZHANG_XUE_YOU')">张学友：{{zhangXueYou}}</button>
          <button @click="$store.commit('UP_GUO_FU_CHENG')">郭富城：{{guoFuCheng}}</button>
          <button @click="$store.commit('UP_LI_MING')">黎明：{{liMing}}</button>
      </div>
  </template>
  
  <script>
  import {mapState} from "vuex";
  export default {
      name: "App",
      computed:mapState(["liuDeHua","liMing","guoFuCheng","zhangXueYou"]),
      mounted(){
          // 第一个参数是mutations的属性名
          // 第二个参数是mutations提供的对应方法的参数,如果要传递多个那么可以将参数设置为对象
          // this.$store.commit("CHANGE_LIU_DE_HUA",{a:1,b:2,c:3,d:4});
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  



### 17-3-6- mutations的简写

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>App</h3>
          <button @click="upLiuDeHua(2)">刘德华：{{liuDeHua}}</button>
          <button @click="run(1)">张学友：{{zhangXueYou}}</button>
          <button @click="suiBian(2)">郭富城：{{guoFuCheng}}</button>
          <button @click="lala(3)">黎明：{{liMing}}</button>
      </div>
  </template>
  
  <script>
  import {mapState,mapMutations} from "vuex";
  export default {
      name: "App",
      computed:mapState(["liuDeHua","liMing","guoFuCheng","zhangXueYou"]),
      methods:{
          upLiuDeHua(num){
              this.$store.commit("UP_LIU_DE_HUA",num);
          },
          // 简写1：
          ...mapMutations(["UP_ZHANG_XUE_YOU","UP_GUO_FU_CHENG","UP_LI_MING"]),
          // 上方代码相当于：
          // UP_ZHANG_XUE_YOU(num){
          //     this.$store.commit("UP_ZHANG_XUE_YOU",num)
          // },
          // UP_GUO_FU_CHENG(num){
          //     this.$store.commit("UP_GUO_FU_CHENG",num)
          // },
          // UP_LI_MING(num){
          //     this.$store.commit("UP_LI_MING",num)
          // }
  
          // 简写2：
          // ...mapMutations({
          //     run:"UP_ZHANG_XUE_YOU",
          //     suiBian:"UP_GUO_FU_CHENG",
          //     lala:"UP_LI_MING"
          // })
          // 以上代码相当于
          run(num){
              this.$store.commit('UP_ZHANG_XUE_YOU',num)
          },
          suiBian(num){
              this.$store.commit('UP_GUO_FU_CHENG',num)
          },
          lala(num){
              this.$store.commit('UP_LI_MING',num)
          }
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

### 17-3-7- mutations的简写原理

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>App</h3>
          <button @click="upLiuDeHua(2)">刘德华：{{ liuDeHua }}</button>
          <button @click="run(1)">张学友：{{ zhangXueYou }}</button>
          <button @click="UP_GUO_FU_CHENG(2)">郭富城：{{ guoFuCheng }}</button>
          <button @click="UP_LI_MING(3)">黎明：{{ liMing }}</button>
      </div>
  </template>
  
  <script>
  import {mapState} from "vuex";
  
  function mapMutations(arg) {
      const obj = {};
      if (arg instanceof Array) {
          arg.forEach(key => {
              obj[key] = function (num) {
                  this.$store.commit(key, num)
              }
          })
      } else {
          Object.keys(arg).forEach(key => {
              obj[key] = function (num) {
                  this.$store.commit(arg[key],num);
              }
          })
      }
      return obj;
  }
  
  export default {
      name: "App",
      computed: mapState(["liuDeHua", "liMing", "guoFuCheng", "zhangXueYou"]),
      methods: {
          upLiuDeHua(num) {
              this.$store.commit("UP_LIU_DE_HUA", num);
          },
          // 简写1：
          ...mapMutations(["UP_ZHANG_XUE_YOU", "UP_GUO_FU_CHENG", "UP_LI_MING"]),
          // 上方代码相当于：
          // UP_ZHANG_XUE_YOU(num){
          //     this.$store.commit("UP_ZHANG_XUE_YOU",num)
          // },
          // UP_GUO_FU_CHENG(num){
          //     this.$store.commit("UP_GUO_FU_CHENG",num)
          // },
          // UP_LI_MING(num){
          //     this.$store.commit("UP_LI_MING",num)
          // }
  
          // 简写2：
          ...mapMutations({
              run: "UP_ZHANG_XUE_YOU",
              suiBian: "UP_GUO_FU_CHENG",
              lala: "UP_LI_MING"
          })
          // 以上代码相当于
          // run(num){
          //     this.$store.commit('UP_ZHANG_XUE_YOU',num)
          // },
          // suiBian(num){
          //     this.$store.commit('UP_GUO_FU_CHENG',num)
          // },
          // lala(num){
          //     this.$store.commit('UP_LI_MING',num)
          // }
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

### 17-3-8- 票数统计getters

* src->store->index.js

  ```js
  import Vue from "vue";
  import Vuex from "vuex";
  Vue.use(Vuex);
  const state = {
  	liuDeHua:10,
  	zhangXueYou:20,
  	liMing:30,
  	guoFuCheng:40
  }
  // 1- mutations类型是一个对象
  // 2- mutations的职责是同步更新数据状态
  // 3- mutations对象的属性类型均是方法，方法的名字建议大写，多个单词之间使用_分割
  const mutations = {
  	// 第一个参数是数据状态，第二个参数是定义的参数
  	// CHANGE_LIU_DE_HUA(state,{a,b,c,d}){
  	// 	console.log("CHANGE_LIU_DE_HUA",a,b,c,d);
  	// }
  	
  	
  	UP_LIU_DE_HUA(state,num=1){
  		state.liuDeHua+=num;
  	},
  	UP_ZHANG_XUE_YOU(state,num=1){
  		state.zhangXueYou+=num;
  	},
  	UP_LI_MING(state,num=1){
  		state.liMing+=num;
  	},
  	UP_GUO_FU_CHENG(state,num=1){
  		state.guoFuCheng+=num;
  	}
  }
  const getters = {
  	// 相当于计算属性，拥有缓存，只要影响 结果的数据不发生改变，那么不会再次执行
  	vuexSumVote(state){
  		console.log("vuexSumVote");
  		return state.liuDeHua+state.liMing+state.guoFuCheng+state.zhangXueYou;
  	}
  }
  const store = new Vuex.Store({
  	state,// 数据状态
  	mutations,// 用于更改数据状态
  	getters
  })
  export default store;
  ```

* src->App.vue

  ```vue
  <template>
      <div>
          <h3>App</h3>
          <button @click="userName+='!'">{{userName}}</button>
          <hr/>
          <button @click="upLiuDeHua(2)">刘德华：{{ liuDeHua }}</button>
          <button @click="run(1)">张学友：{{ zhangXueYou }}</button>
          <button @click="UP_GUO_FU_CHENG(2)">郭富城：{{ guoFuCheng }}</button>
          <button @click="UP_LI_MING(3)">黎明：{{ liMing }}</button>
          <p>总票数1：{{liuDeHua+liMing+guoFuCheng+zhangXueYou}}</p>
          <p>总票数2：{{sumVote()}}</p>
          <p>总票数3：{{comVoteSum}}</p>
          <p>总票数4-getters：{{$store.getters.vuexSumVote}}</p>
          <p>总票数5-getters简写1：{{vuexSumVote}}</p>
          <p>总票数5-getters简写2：{{sum}}</p>
      </div>
  </template>
  
  <script>
  import {mapState,mapMutations,mapGetters} from "vuex";
  export default {
      name: "App",
      data(){
          return {
              userName:"laowang"
          }
      },
      computed: {
          ...mapState(["liuDeHua", "liMing", "guoFuCheng", "zhangXueYou"]),
          // getters的简写1：
          ...mapGetters(["vuexSumVote"]),
          // getters的简写2：
          ...mapGetters({
             sum:"vuexSumVote"
          }),
          comVoteSum(){
              console.log("comVoteSum")
              return this.liuDeHua+this.liMing+this.guoFuCheng+this.zhangXueYou;
          }
      },
      methods: {
          upLiuDeHua(num) {
              this.$store.commit("UP_LIU_DE_HUA", num);
          },
          // 简写1：
          ...mapMutations(["UP_ZHANG_XUE_YOU", "UP_GUO_FU_CHENG", "UP_LI_MING"]),
  
          // 简写2：
          ...mapMutations({
              run: "UP_ZHANG_XUE_YOU",
              suiBian: "UP_GUO_FU_CHENG",
              lala: "UP_LI_MING"
          }),
          sumVote(){
              console.log("sumVote")
              return this.liuDeHua+this.liMing+this.guoFuCheng+this.zhangXueYou;
          }
      },
      mounted(){
          // console.log(this.$store.getters.vuexSumVote)
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

## 17-4- todoList

* src->store->index.js

  ```js
  import Vue from "vue";
  import Vuex from "vuex";
  Vue.use(Vuex);
  const mutations = {
  	// 添加任务
  	ADD_TASK_LIST(state,e){
  		const title = e.target.value.trim();
  		if(title.length === 0){
  			alert("请输入任务标题");
  			return;
  		}
  		if(state.taskList.some(v=>v.title === title)){
  			alert("请不要输入重复内容");
  			return;
  		}
  		e.target.value = null;
  		state.taskList.unshift({
  			id:Date.now(),
  			title,
  			isChecked:true
  		})
  	},
  	// 根据ID，修改isChecked(取反）
  	CHANGE_IS_CHECKED_BY_ID(state,id){
  		state.taskList = state.taskList.map(item=>{
  			if(item.id === id){
  				item.isChecked = !item.isChecked;
  			}
  			return item;
  		})
  	},
  	// 根据ID进行删除
  	DEL_TASK_LIST_BY_ID(state,id){
  		state.taskList = state.taskList.filter(item=>item.id !== id);
  	},
  	// 删除已完成的任务
  	DEL_OVER_TASK_LIST(state){
  		state.taskList = state.taskList.filter(item=>!item.isChecked)
  	},
  	// 更新数据状态（isChecked)
  	UP_TASK_LIST(state,e){
  		console.log(e.target.checked)
  		state.taskList = state.taskList.map(item=>{
  			item.isChecked = e.target.checked;
  			return item;
  		})
  	}
  	
  }
  const getters = {
  	overNum(state){
  		return state.taskList.reduce(function(num,item){
  			if(item.isChecked){
  				num++;
  			}
  			return num;
  		},0)
  	},
  	allNum(state){
  		return state.taskList.length;
  	}
  }
  const store = new Vuex.Store({
  	state:{
  		taskList:[],// 任务列表
  	},
  	mutations,
  	getters
  });
  export default store;
  ```

* src->main.js

  ```js
  import Vue from "vue";
  import store from "@/store";
  import App from "@/App";
  new Vue({
  	store,
  	render:h=>h(App)
  }).$mount("#app");
  ```

* src->App.vue

  ```vue
  <template>
      <div class="todo-container">
          <div class="todo-wrap">
              <TodoHeader></TodoHeader>
              <TodoMain></TodoMain>
              <TodoFooter></TodoFooter>
          </div>
      </div>
  </template>
  
  <script>
  import TodoHeader from "@/components/TodoHeader";
  import TodoMain from "@/components/TodoMain";
  import TodoFooter from "@/components/TodoFooter";
  export default {
      name: "App",
      components: {TodoFooter, TodoMain, TodoHeader}
  }
  </script>
  
  <style>
  /*base*/
  body {
      background: #fff;
  }
  
  .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
  }
  
  .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
  }
  
  .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
  }
  
  .btn:focus {
      outline: none;
  }
  
  
  /*app*/
  .todo-container {
      width: 600px;
      margin: 0 auto;
  }
  .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
  }
  
  /*header*/
  .todo-header input {
      width: 560px;
      height: 28px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 7px;
  }
  
  .todo-header input:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
  
  /*main*/
  .todo-main {
      margin-left: 0px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0px;
  }
  
  .todo-empty {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding-left: 5px;
      margin-top: 10px;
  }
  /*item*/
  li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
  }
  
  li label {
      float: left;
      cursor: pointer;
  }
  
  li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
  }
  
  li button {
      float: right;
      display: none;
      margin-top: 3px;
  }
  
  li:before {
      content: initial;
  }
  
  li:last-child {
      border-bottom: none;
  }
  
  /*footer*/
  .todo-footer {
      height: 40px;
      line-height: 40px;
      padding-left: 6px;
      margin-top: 5px;
  }
  
  .todo-footer label {
      display: inline-block;
      margin-right: 20px;
      cursor: pointer;
  }
  
  .todo-footer label input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
  }
  
  .todo-footer button {
      float: right;
      margin-top: 5px;
  }
  
  </style>
  ```

* src->components->TodoHeader.vue

  ```vue
  <template>
      <div class="todo-header">
          <input @keyup.enter="$store.commit('ADD_TASK_LIST',$event)" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
  </template>
  
  <script>
  export default {
      name: "TodoHeader"
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

* src->components->TodoMain.vue

  ```vue
  <template>
      <ul class="todo-main">
          <li @mouseenter="index=item.id" @mouseleave="index=-1" v-for="item in $store.state.taskList" :key="item.id">
              <label>
                  <input @change="$store.commit('CHANGE_IS_CHECKED_BY_ID',item.id)" :checked="item.isChecked" type="checkbox"/>
                  <span>{{item.title}}</span>
              </label>
              <button @click="$store.commit('DEL_TASK_LIST_BY_ID',item.id)" v-show="index===item.id" class="btn btn-danger">删除</button>
          </li>
      </ul>
  </template>
  
  <script>
  
  export default {
      name: "TodoMain",
      data(){
          return {
              index:-1
          }
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

* src->components->TodoFooter.vue

  ```vue
  <template>
      <div class="todo-footer">
          <label>
              <input @change="$store.commit('UP_TASK_LIST',$event)" :checked="overNum===allNum && overNum>0" type="checkbox"/>
          </label>
          <span>已完成{{overNum}}/ 全部{{allNum}}</span>
          <button v-show="overNum>0" @click="$store.commit('DEL_OVER_TASK_LIST')" class="btn btn-danger">清除已完成任务</button>
      </div>
  </template>
  
  <script>
  import {mapGetters} from "vuex";
  export default {
      name: "TodoFooter",
      computed:mapGetters(["overNum","allNum"])
  
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

## 17-5- actions

### 17-5-1- 不使用actions

* src->store->index.js

  ```js
  import Vue from "vue";
  import Vuex from "vuex";
  
  Vue.use(Vuex);
  const store = new Vuex.Store({
  	state:{
  		items:[]
  	},
  	mutations:{
  		UP_ITEMS(state,items){
  			state.items = items;
  		}
  	}
  })
  export default store;
  ```

* src->App.vue

  ```vue
  <template>
      <div>
          <div v-for="item in $store.state.items" :key="item.id">
              {{item.full_name}}
          </div>
      </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
      name: "App",
      mounted(){
          axios.get("https://api.github.com/search/repositories?q=r&sort=stars")
                  .then(value=>{
                      console.log(value.data.items);
                      this.$store.commit("UP_ITEMS",value.data.items);
                  })
      }
  }
  </script>
  
  
  ```

  

### 17-5-1- 使用action

* src->store->index.js

  ```js
  import Vue from "vue";
  import Vuex from "vuex";
  import axios from "axios";
  Vue.use(Vuex);
  const store = new Vuex.Store({
  	// this.$store.state.items
  	state:{
  		items:[]
  	},
  	// this.$store.commit("UP_ITEMS",传递参数)
  	mutations:{
  		UP_ITEMS(state,items){
  			state.items = items;
  		}
  	},
  	// this.$store.dispatch("getItems",{a:1,b:2,c:3,d:4,q:"abc"})
  	actions:{
  		async getItems({state,commit,dispatch},{a,b,c,d,q="r"}){
  			// console.log("getItems",a,b,c,d);
  			// console.log(state);
  			// commit("UP_ITEMS",[1,2,3,4])
  			// dispatch("run")
  			console.log(a,b,c,d);
  			const {data} = await axios.get("https://api.github.com/search/repositories?sort=stars",{
  				params:{
  					q
  				}
  			});
  			commit("UP_ITEMS",data.items);
  			
  		},
  		run(){
  			console.log("run")
  		}
  	},
  	// this.$store.getters.run
  	getters:{
  		run(){
  			return 100;
  		}
  	}
  })
  export default store;
  ```

* src->App.vue

  ```vue
  <template>
      <div>
          <div v-for="item in $store.state.items" :key="item.id">
              {{item.full_name}}
          </div>
      </div>
  </template>
  
  <script>
  import axios from "axios";
  import {mapActions} from "vuex"
  export default {
      name: "App",
      methods:{
          ...mapActions(["getItems"]),
          ...mapActions({
              my:"getItems"
          })
      },
      mounted(){
          // 第一个参数是action的名字
          // 第二个参数是传递的数据
          // 1
          // this.$store.dispatch("getItems",{
          //     a:1,
          //     b:2,
          //     c:3,
          //     d:4
          // });
  
          // 2- 简写
          // this.getItems({
          //     a:100,
          //     b:200,
          //     c:300,
          //     d:400,
          //     q:"vue"
          // });
          this.my({a:11,b:12,c:13,d:14,q:"react"})
  
  
  
  
          // axios.get("https://api.github.com/search/repositories?q=r&sort=stars")
          //         .then(value=>{
          //             console.log(value.data.items);
          //             this.$store.commit("UP_ITEMS",value.data.items);
          //         })
      }
  }
  </script>
  
  
  ```

  

## 17-6- modules

### 17-6-1- 搭建路由

* src->router->index.js

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Index from "@/views/Index";
  import Login from "@/views/Login";
  import AddGoods from "@/views/AddGoods";
  import GoodsList from "@/views/GoodsList";
  import MyCart from "@/views/MyCart";
  Vue.use(VueRouter);
  const routes = [
  	{
  		path:"/",
  		component:Index,
  		children:[
  			{
  				path:"/",
  				component:AddGoods,
  				meta:{
  					isAuthor:true,// 需要验证是否登陆过
  					title:"添加商品页面"
  				}
  				
  			},{
  				path:"/goodsList",
  				component: GoodsList,
  				meta:{
  					isAuthor:true,// 需要验证是否登陆过
  					title:"商品列表界面"
  				}
  			},{
  				path:"/myCart",
  				component: MyCart,
  				meta:{
  					isAuthor:true,// 需要验证是否登陆过
  					title:"我的购物车界面"
  				}
  			}
  		]
  	},{
  		path:"/login",
  		component:Login,
  		meta:{
  			title:"登陆界面"
  		}
  	}
  ]
  const router = new VueRouter({
  	mode:"history",
  	linkActiveClass:"a-active",
  	routes
  });
  router.beforeEach(function(to,from,next){
  	// console.log(to.meta.isAuthor);
  	// 1- 判断路由是否需要进行验证
  	if(to.meta.isAuthor){
  		// 2- 进行验证
  		if(localStorage.getItem("userName")){
  			// 验证成功
  			next();
  		}else next("/login");
  	}else next();
  })
  router.afterEach(function(to){
  	document.title = to.meta.title;
  })
  export default router;
  ```

* src->App.vue

  ```vue
  <template>
      <div class="container">
          <router-view></router-view>
      </div>
  </template>
  
  <script>
  export default {
      name: "App"
  }
  </script>
  
  <style scoped>
      .container{
          text-align: center;
      }
  </style>
  ```

* src->views->Index.vue

  ```vue
  <template>
      <div>
          <nav>
              <router-link exact to="/">添加商品</router-link>|
              <router-link to="/goodsList">商品列表</router-link>|
              <router-link to="/myCart">我的购物车</router-link>
          </nav>
          <hr/>
          <router-view></router-view>
      </div>
  </template>
  
  <script>
  export default {
      name: "Index"
  }
  </script>
  
  <style lang="less" scoped>
      nav{
          a{
              margin:10px;
              color:skyblue;
          }
          .a-active{
              color:red;
          }
      }
  </style>
  ```

* src->main.js

  ```js
  import Vue from "vue";
  import router from "@/router";
  import App from "@/App";
  new Vue({
  	el:"#app",
  	router,
  	render:h=>h(App)
  })
  ```

### 17-6-2- 搭建store

* src->store->modules->goods.js--->商品模块

  ```js
  
  export default {
  	state:{
  	
  	},
  	mutations:{
  	
  	},
  	getters:{
  	
  	},
  	actions:{
  	
  	}
  }
  ```

  

* src->store->modules->cart.js----->购物车模块

  ```js
  
  export default {
  	state:{
  	
  	},
  	mutations:{
  	
  	},
  	getters:{
  	
  	},
  	actions:{
  	
  	}
  }
  ```

  

* src->store->modules->user.js----->提供用户模块

  ```js
  
  export default {
  	state:{
  	
  	},
  	mutations:{
  	
  	},
  	getters:{
  	
  	},
  	actions:{
  	
  	}
  }
  ```

  

* src->store->index.js----->提供仓库

  ```js
  import Vue from "vue";
  import Vuex from "vuex";
  import goods from "@/store/modules/goods";
  import user from "@/store/modules/user";
  import cart from "@/store/modules/cart";
  Vue.use(Vuex);
  const store = new Vuex.Store({
  	state:{
  	
  	},
  	mutations:{
  	
  	},
  	getters:{
  	
  	},
  	actions:{
  	
  	},
  	modules:{
  		goods,
  		user,
  		cart
  	}
  })
  export default store;
  ```

  

* src->main.js

  ```js
  import Vue from "vue";
  import router from "@/router";
  import store from "@/store";
  import App from "@/App";
  new Vue({
  	el:"#app",
  	router,
  	store,
  	render:h=>h(App)
  })
  ```

### 17-6-3- 完成登陆

* data->index.json

  ```json
  {
      "userList":[
          {
              "id": 1,
              "userName": "zhangsan"
          },{
              "id": 2,
              "userName": "lisi"
          },
          {
              "id": 3,
              "userName": "wangwu"
          },
          {
              "id": 4,
              "userName": "zhaoliu"
          },
          {
              "id": 5,
              "userName": "yanqi"
          }
      ]
  }
  ```

* 启动

  * 进入到data目录
  * 输入命令：

  ```shell
  json-server --watch ./index.json
  ```

* src->store->modules->user.js---->增加actions

  ```js
  import axios from "axios";
  export default {
  	state:{
  		userName:localStorage.getItem("userName")?localStorage.getItem("userName"):null
  	},
  	mutations:{
  		CHANGE_USER_NAME(state,userName){
  			// 1
  			// state.userName = userName;
  			// localStorage.setItem("userName",userName)
  			
  			// 2
  			state.userName = localStorage.userName = userName;
  		}
  	},
  	getters:{
  	
  	},
  	actions:{
  		async loginAsync({commit},userName){
  			
  			const {data} = await axios.get("http://localhost:3000/userList",{
  				params:{
  					userName
  				}
  			})
  			// 得到的响应信息是否正确
  			if(data.length===1){
  				const {userName} = data[0];
  				commit("CHANGE_USER_NAME",userName)
  			}else{
  				return Promise.reject("登陆失败");
  			}
  		}
  	}
  }
  ```

* src->router->index.js ---> 跳转至登陆界面增加参数：指定登陆成功以后的跳转地址

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Index from "@/views/Index";
  import Login from "@/views/Login";
  import AddGoods from "@/views/AddGoods";
  import GoodsList from "@/views/GoodsList";
  import MyCart from "@/views/MyCart";
  Vue.use(VueRouter);
  const routes = [
  	{
  		path:"/",
  		component:Index,
  		children:[
  			{
  				path:"/",
  				component:AddGoods,
  				meta:{
  					isAuthor:true,// 需要验证是否登陆过
  					title:"添加商品页面"
  				}
  				
  			},{
  				path:"/goodsList",
  				component: GoodsList,
  				meta:{
  					isAuthor:true,// 需要验证是否登陆过
  					title:"商品列表界面"
  				}
  			},{
  				path:"/myCart",
  				component: MyCart,
  				meta:{
  					isAuthor:true,// 需要验证是否登陆过
  					title:"我的购物车界面"
  				}
  			}
  		]
  	},{
  		path:"/login",
  		component:Login,
  		meta:{
  			title:"登陆界面"
  		}
  	}
  ]
  const router = new VueRouter({
  	mode:"history",
  	linkActiveClass:"a-active",
  	routes
  });
  router.beforeEach(function(to,from,next){
  	// console.log(to.meta.isAuthor);
  	// 1- 判断路由是否需要进行验证
  	if(to.meta.isAuthor){
  		// 2- 进行验证
  		if(localStorage.getItem("userName")){
  			// 验证成功
  			next();
  		}else next("/login?go="+to.fullPath);
  	}else next();
  })
  router.afterEach(function(to){
  	document.title = to.meta.title;
  })
  export default router;
  ```

* src->views->login.vue

  ```vue
  <template>
      <div>
          <!--        <input @keyup.enter="$store.dispatch('loginAsync',$event.target.value)" placeholder="请输入您的用户名，回车登陆" type="text">-->
          <input @keyup.enter="login" placeholder="请输入您的用户名，回车登陆" type="text">
      </div>
  </template>
  
  <script>
  // computed结合使用：mapGetters mapState
  // methods结合使用：mapMutations mapActions
  import {mapActions} from "vuex";
  export default {
      name: "Login",
      methods:Object.assign({
          async login(e) {
              const userName = e.target.value;
              if (userName.length === 0) {
                  alert("请输入正确的用户名");
                  return;
              }
              try{
                  // 1- 完整写法
                  // dispatch返回的是一个Promise实例。该实例的状态与值受loginAsync返回值决定。
                  // const result = await this.$store.dispatch("loginAsync",userName);
                  // this.$router.back();
  
                  // 2- 简写1
                  // const result = await this.loginAsync(userName);
                  // this.$router.back();
  
                  // 3- 简写2
                  const result = await this.loginAsync2(userName);
                  // this.$router.back();
                  // 判断是否接收到登陆成功以后的跳转地址
                  if(this.$route.query.go) this.$router.push(this.$route.query.go);
                  else this.$router.back();
  
  
  
              }catch (err){
                  alert(err);
              }
  
          }
      },
              mapActions(["loginAsync"]),
              mapActions({
                  loginAsync2:"loginAsync"
              })
  
      )
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

### 17-6-4- 完成添加商品

* src->views->AddGoodsList.vue

  ```vue
  <template>
      <form ref="goodsForm">
          <p>商品名称：<input name="goodsName" type="text"></p>
          <p>商品价格：<input name="goodsPrice" type="text"></p>
          <button @click.prevent="addGoods">添加商品</button>
      </form>
  </template>
  
  <script>
  import {mapMutations} from "vuex";
  export default {
      name: "AddGoods",
      methods:{
          addGoods(){
              // 1
              // const goodsName = this.$refs.goodsForm.goodsName.value.trim();
              // const goodsPrice = this.$refs.goodsForm.goodsPrice.value.trim()/1;
  
              // 2
              const formdata = new FormData(this.$refs.goodsForm);
              const goodsName = formdata.get("goodsName").trim();
              const goodsPrice = formdata.get("goodsPrice").trim()/1;
  
              if(goodsName.length === 0 || goodsPrice.length === 0){
                  alert("请输入正确的商品信息");
                  return;
              }
  
              // 将表单数据放置到仓库中1-完整写法
              // this.$store.commit("ADD_GOODS_LIST",{goodsName,goodsPrice});
  
              // 将表单数据放置到仓库中2-简写
              // this.ADD_GOODS_LIST({goodsName,goodsPrice});
  
              // 将表单数据放置到仓库中3-简写
              this.addGoodsList({goodsName,goodsPrice});
  
              this.$router.push("/goodsList");
          },
          ...mapMutations(["ADD_GOODS_LIST"]),
          ...mapMutations({
              addGoodsList:"ADD_GOODS_LIST"
          })
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

* src->store->modules->goods.js

  ```js
  
  export default {
  	state:{
  		// 商品列表
  		goodsList:[]
  	},
  	mutations:{
  		ADD_GOODS_LIST(state,goodsInfo){
  			state.goodsList.unshift({
  				id:Math.random().toString(36).substring(2),//唯一标识
  				addTime:Date.now(),// 上架时间（添加时间）
  				...goodsInfo
  			})
  		}
  	},
  	getters:{
  	
  	},
  	actions:{
  	
  	}
  }
  ```

### 17-6-5- 完成商品列表

* src->filters->index.js

  ```js
  const filters = {
  	date(time){
  		const timer = new Date(time);
  		return timer.getFullYear()+"-"+
  			(timer.getMonth()+1).toString().padStart(2,"0")+"-"+
  			timer.getDate().toString().padStart(2,"0")+" "+
  			timer.getHours().toString().padStart(2,"0")+":"+
  			timer.getMinutes().toString().padStart(2,"0")+":"+
  			timer.getSeconds().toString().padStart(2,"0");
  	},
  	currency(num,n=2){
  		return "￥"+num.toFixed(n)
  	},
  	sliceNum(str,num){
  		return str.slice(0,num);
  	},
  	getImg(img){
  		return "https://img30.360buyimg.com/"+img;
  	}
  };
  export default function(Vue){
  	for(let key in filters){
  		Vue.filter(key,filters[key]);
  	}
  }
  ```

* src->views->GoodsList.vue

  ```vue
  <template>
      <div>
          <!--未使用简写-->
  <!--        <div v-for="item in $store.state.goods.goodsList" :key="item.id">-->
  <!--            <p>商品名称：{{item.goodsName}}</p>-->
  <!--            <p>商品价格：{{item.goodsPrice | currency}}</p>-->
  <!--            <p>上架时间：{{item.addTime | date}}</p>-->
  <!--            <button>加入购物车</button>-->
  <!--            <hr/>-->
  <!--        </div>-->
  
  
          <!--简写-->
          <div v-for="item in goodsList" :key="item.id">
              <p>商品名称：{{item.goodsName}}</p>
              <p>商品价格：{{item.goodsPrice | currency}}</p>
              <p>上架时间：{{item.addTime | date}}</p>
              <button>加入购物车</button>
              <hr/>
          </div>
      </div>
  </template>
  
  <script>
  import {mapState} from "vuex";
  export default {
      name: "GoodsList",
      computed:mapState({
          goodsList:state=>state.goods.goodsList
      })
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

* src->main.js

  ```js
  import Vue from "vue";
  import router from "@/router";
  import store from "@/store";
  import filters from "@/filters";
  import App from "@/App";
  Vue.use(filters);
  new Vue({
  	el:"#app",
  	router,
  	store,
  	render:h=>h(App)
  })
  ```





### 17-6-6- 加入购物车

* src->store->modules->cart.js

  ```js
  
  export default {
  	state:{
  		cartList:[],// [{id:商品ID,goodsName:商品名称,goodsPrice:商品价格，buyNum:数量}]
  	},
  	mutations:{
  		JOIN_CART_LIST(state,goodsInfo){
  			// 判断购物车中是否有该商品
  			const info = state.cartList.find(item=>item.id === goodsInfo.id);
  			if(info) info.buyNum++;
  			else{
  				state.cartList.unshift({
  					...goodsInfo,
  					buyNum:1
  				})
  			}
  		}
  	},
  	getters:{
  	
  	},
  	actions:{
  	
  	}
  }
  ```

* src->views->GoodsList.vue

  ```vue
  <template>
      <div>
          <div v-for="item in goodsList" :key="item.id">
              <p>商品名称：{{item.goodsName}}</p>
              <p>商品价格：{{item.goodsPrice | currency}}</p>
              <p>上架时间：{{item.addTime | date}}</p>
              <button @click="$store.commit('JOIN_CART_LIST',item)">加入购物车</button>
              <hr/>
          </div>
      </div>
  </template>
  
  <script>
  import {mapState} from "vuex";
  export default {
      name: "GoodsList",
      computed:mapState({
          goodsList:state=>state.goods.goodsList
      })
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

### 17-6-7- 完成购物车列表

* src->store->modules->cart.js

  ```js
  
  export default {
  	state:{
  		cartList:[],// [{id:商品ID,goodsName:商品名称,goodsPrice:商品价格，buyNum:数量}]
  	},
  	mutations:{
  		JOIN_CART_LIST(state,goodsInfo){
  			// 判断购物车中是否有该商品
  			const info = state.cartList.find(item=>item.id === goodsInfo.id);
  			if(info) info.buyNum++;
  			else{
  				state.cartList.unshift({
  					...goodsInfo,
  					buyNum:1
  				})
  			}
  		},
  		// id:商品ID,num:1加 -1减
  		UP_CART_LIST_BY_ID(state,{id,num}){
  			// 1
  			// const cartInfo = state.cartList.find(item=>item.id === id);
  			// cartInfo.buyNum+=num;
  			// if(cartInfo.buyNum === 0){
  			// 	state.cartList = state.cartList.filter(v=>v.id !== id);
  			// }
  			
  			// 2
  			const index = state.cartList.findIndex(item=>item.id === id);
  			const cartInfo = state.cartList[index];
  			cartInfo.buyNum+=num;
  			if(cartInfo.buyNum === 0) state.cartList.splice(index,1);
  		}
  	},
  	getters:{
  		sumPrice(state){
  			return state.cartList.reduce(function(sum,item){
  				return sum+item.goodsPrice*item.buyNum
  			},0)
  		}
  	},
  	actions:{
  	
  	}
  }
  ```

* src->views->MyCart.vue

  ```vue
  <template>
      <div>
          <template v-if="$store.state.cart.cartList.length>0">
              <div v-for="item in $store.state.cart.cartList" :key="item.id">
                  <p>商品名称：{{item.goodsName}}</p>
                  <p>商品价格：{{item.goodsPrice | currency}}</p>
                  <p>购买数量：
                      <button @click="$store.commit('UP_CART_LIST_BY_ID',{id:item.id,num:-1})">-</button>
                          {{item.buyNum}}
                      <button @click="$store.commit('UP_CART_LIST_BY_ID',{id:item.id,num:1})">+</button>
                  </p>
                  <p>小计：{{item.goodsPrice*item.buyNum | currency}}</p>
                  <hr/>
              </div>
              <div>合计：{{$store.getters.sumPrice | currency}}|{{sumPrice |currency}}|{{sumPrice2 | currency}}</div>
          </template>
          <h3 v-else>购物车空空如也！</h3>
  
      </div>
  </template>
  
  <script>
  import {mapGetters} from "vuex";
  export default {
      name: "MyCart",
      computed:{
          ...mapGetters(["sumPrice"]),
          ...mapGetters({
              sumPrice2:"sumPrice"
          }),
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

### 17-6-8- 命名空间

> vuex中如果使用了模块（modules),默认会将getters,mutations,actions作为全局的空间。
>
> getters--->$store.getters.xxxx
>
> mutations->$store.commit('mutation名字')
>
> actions->$store.dispatch('action名字')

* 开启命名空间

  * src->store->modules->goods.js

  ```js
  
  export default {
  	namespaced:true,// 开启命名空间
  	state:{
  		// 商品列表
  		goodsList:[]
  	},
  	mutations:{
  		ADD_GOODS_LIST(state,goodsInfo){
  			// if(state.goodsList.some(v=>v.goodsName === goodsInfo.goodsName)){
  			// 	alert("您添加的商品已存在 ")
  			// 	return;
  			// }
  			state.goodsList.unshift({
  				id:Math.random().toString(36).substring(2),//唯一标识
  				addTime:Date.now(),// 上架时间（添加时间）
  				...goodsInfo
  			})
  		}
  	},
  	getters:{
  	
  	},
  	actions:{
  	
  	}
  }
  ```

  

  * src->store->modules->cart.js

  ```js
  
  export default {
  	namespaced:true,
  	state:{
  		cartList:[],// [{id:商品ID,goodsName:商品名称,goodsPrice:商品价格，buyNum:数量}]
  	},
  	mutations:{
  		JOIN_CART_LIST(state,goodsInfo){
  			// 判断购物车中是否有该商品
  			const info = state.cartList.find(item=>item.id === goodsInfo.id);
  			if(info) info.buyNum++;
  			else{
  				state.cartList.unshift({
  					...goodsInfo,
  					buyNum:1
  				})
  			}
  		},
  		// id:商品ID,num:1加 -1减
  		UP_CART_LIST_BY_ID(state,{id,num}){
  			// 1
  			// const cartInfo = state.cartList.find(item=>item.id === id);
  			// cartInfo.buyNum+=num;
  			// if(cartInfo.buyNum === 0){
  			// 	state.cartList = state.cartList.filter(v=>v.id !== id);
  			// }
  			
  			// 2
  			const index = state.cartList.findIndex(item=>item.id === id);
  			const cartInfo = state.cartList[index];
  			cartInfo.buyNum+=num;
  			if(cartInfo.buyNum === 0) state.cartList.splice(index,1);
  		}
  	},
  	getters:{
  		sumPrice(state){
  			return state.cartList.reduce(function(sum,item){
  				return sum+item.goodsPrice*item.buyNum
  			},0)
  		}
  	},
  	actions:{
  	
  	}
  }
  ```

  

  * src->store->modules->user.js

  ```js
  import axios from "axios";
  export default {
  	namespaced:true,//  开启了命名空间
  	state:{
  		userName:localStorage.getItem("userName")?localStorage.getItem("userName"):null
  	},
  	mutations:{
  		CHANGE_USER_NAME(state,userName){
  			// 1
  			// state.userName = userName;
  			// localStorage.setItem("userName",userName)
  			
  			// 2
  			state.userName = localStorage.userName = userName;
  		}
  	},
  	getters:{
  	
  	},
  	actions:{
  		async loginAsync({commit},userName){
  			
  			const {data} = await axios.get("http://localhost:3000/userList",{
  				params:{
  					userName
  				}
  			})
  			// 得到的响应信息是否正确
  			if(data.length===1){
  				const {userName} = data[0];
  				commit("CHANGE_USER_NAME",userName)
  			}else{
  				return Promise.reject("登陆失败");
  			}
  		}
  	}
  }
  ```

* actions的使用 src->views->Login.vue

  ```vue
  <template>
      <div>
          <input @keyup.enter="login" placeholder="请输入您的用户名，回车登陆" type="text">
      </div>
  </template>
  
  <script>
  // computed结合使用：mapGetters mapState
  // methods结合使用：mapMutations mapActions
  import {mapActions} from "vuex";
  export default {
      name: "Login",
      methods:Object.assign({
          async login(e) {
              const userName = e.target.value;
              if (userName.length === 0) {
                  alert("请输入正确的用户名");
                  return;
              }
              try{
                  // 1- 完整写法
                  // dispatch返回的是一个Promise实例。该实例的状态与值受loginAsync返回值决定。
                  // const result = await this.$store.dispatch("user/loginAsync",userName);
  
                  // 2- 简写1
                  // const result = await this.loginAsync(userName);
  
                  // 3- 简写2
                  const result = await this.loginAsync2(userName);
                  // this.$router.back();
                  // 判断是否接收到登陆成功以后的跳转地址
                  if(this.$route.query.go) this.$router.push(this.$route.query.go);
                  else this.$router.back();
  
  
  
              }catch (err){
                  alert(err);
              }
  
          }
      },
              mapActions("user",["loginAsync"]),
              mapActions("user",{
                  loginAsync2:"loginAsync"
              })
  
      )
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

* mutations  src->views->AddGoodsList.vue

  ```vue
  <template>
      <form ref="goodsForm">
          <p>商品名称：<input name="goodsName" type="text"></p>
          <p>商品价格：<input name="goodsPrice" type="text"></p>
          <button @click.prevent="addGoods">添加商品</button>
      </form>
  </template>
  
  <script>
  import {mapMutations} from "vuex";
  export default {
      name: "AddGoods",
      methods:{
          addGoods(){
              // 1
              // const goodsName = this.$refs.goodsForm.goodsName.value.trim();
              // const goodsPrice = this.$refs.goodsForm.goodsPrice.value.trim()/1;
  
              // 2
              const formdata = new FormData(this.$refs.goodsForm);
              const goodsName = formdata.get("goodsName").trim();
              const goodsPrice = formdata.get("goodsPrice").trim()/1;
  
              if(goodsName.length === 0 || goodsPrice.length === 0){
                  alert("请输入正确的商品信息");
                  return;
              }
              if(this.$store.state.goods.goodsList.some(v=>v.goodsName === goodsName)){
                  alert("您添加的商品已存在 ")
                  return;
              }
  
              // 将表单数据放置到仓库中1-完整写法
              // this.$store.commit("goods/ADD_GOODS_LIST",{goodsName,goodsPrice});
  
              // 将表单数据放置到仓库中2-简写
              // this.ADD_GOODS_LIST({goodsName,goodsPrice});
  
              // 将表单数据放置到仓库中3-简写
              this.addGoodsList({goodsName,goodsPrice});
  
              this.$router.push("/goodsList");
          },
          ...mapMutations("goods",["ADD_GOODS_LIST"]),
          ...mapMutations("goods",{
              addGoodsList:"ADD_GOODS_LIST"
          })
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

* mutations src->views->GoodsList.vue

  ```vue
  <template>
      <div>
          <div v-for="item in goodsList" :key="item.id">
              <p>商品名称：{{item.goodsName}}</p>
              <p>商品价格：{{item.goodsPrice | currency}}</p>
              <p>上架时间：{{item.addTime | date}}</p>
  
              <button @click="$store.commit('cart/JOIN_CART_LIST',item);$router.push('/myCart')">加入购物车</button>
              <hr/>
          </div>
      </div>
  </template>
  
  <script>
  import {mapState} from "vuex";
  export default {
      name: "GoodsList",
      computed:mapState({
          goodsList:state=>state.goods.goodsList
      })
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

* getters--->   src->views->MyCart.vue

  ```vue
  <template>
      <div>
          <template v-if="$store.state.cart.cartList.length>0">
              <div v-for="item in $store.state.cart.cartList" :key="item.id">
                  <p>商品名称：{{item.goodsName}}</p>
                  <p>商品价格：{{item.goodsPrice | currency}}</p>
                  <p>购买数量：
                      <button @click="$store.commit('cart/UP_CART_LIST_BY_ID',{id:item.id,num:-1})">-</button>
                          {{item.buyNum}}
                      <button @click="$store.commit('cart/UP_CART_LIST_BY_ID',{id:item.id,num:1})">+</button>
                  </p>
                  <p>小计：{{item.goodsPrice*item.buyNum | currency}}</p>
                  <hr/>
              </div>
              <div>合计：{{$store.getters["cart/sumPrice"] | currency}}|{{sumPrice |currency}}|{{sumPrice2 | currency}}</div>
          </template>
          <h3 v-else>购物车空空如也！</h3>
  
      </div>
  </template>
  
  <script>
  import {mapGetters} from "vuex";
  export default {
      name: "MyCart",
      computed:{
          ...mapGetters('cart',["sumPrice"]),
          ...mapGetters('cart',{
              sumPrice2:"sumPrice"
          }),
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

### 17-6-9- vuex中的状态使用v-model

* src->views->AddGoodsList.vue

  ```vue
  <template>
      <form ref="goodsForm">
          <input v-model.number="num" type="text" placeholder="测试">
          <input v-model.number="num2" type="text" placeholder="测试2">
          <p>商品名称：<input name="goodsName" type="text"></p>
          <p>商品价格：<input name="goodsPrice" type="text"></p>
          <button @click.prevent="addGoods">添加商品</button>
      </form>
  </template>
  
  <script>
  import {mapMutations} from "vuex";
  export default {
      name: "AddGoods",
      methods:{
          addGoods(){
              // 1
              // const goodsName = this.$refs.goodsForm.goodsName.value.trim();
              // const goodsPrice = this.$refs.goodsForm.goodsPrice.value.trim()/1;
  
              // 2
              const formdata = new FormData(this.$refs.goodsForm);
              const goodsName = formdata.get("goodsName").trim();
              const goodsPrice = formdata.get("goodsPrice").trim()/1;
  
              if(goodsName.length === 0 || goodsPrice.length === 0){
                  alert("请输入正确的商品信息");
                  return;
              }
              if(this.$store.state.goods.goodsList.some(v=>v.goodsName === goodsName)){
                  alert("您添加的商品已存在 ")
                  return;
              }
  
              // 将表单数据放置到仓库中1-完整写法
              // this.$store.commit("goods/ADD_GOODS_LIST",{goodsName,goodsPrice});
  
              // 将表单数据放置到仓库中2-简写
              // this.ADD_GOODS_LIST({goodsName,goodsPrice});
  
              // 将表单数据放置到仓库中3-简写
              this.addGoodsList({goodsName,goodsPrice});
  
              this.$router.push("/goodsList");
          },
          ...mapMutations("goods",["ADD_GOODS_LIST"]),
          ...mapMutations("goods",{
              addGoodsList:"ADD_GOODS_LIST"
          })
      },
      computed:{
          num:{
              get(){
                  return this.$store.state.goods.num;
              },
              set(v){
                  this.$store.commit("goods/CHANGE_NUM",v);
                  // console.log(v);
              }
          },
          num2:{
              get(){
                  return this.$store.state.num
              },
              set(v){
                  this.$store.commit("CHANGE_NUM",v)
              }
          }
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

### 17-6-10- vuex 增加缓存

* 下载

  ```shell
  cnpm install vuex-persistedstate
  ```

* src->store->index.js

  ```js
  import Vue from "vue";
  import Vuex from "vuex";
  import createPersistedState from "vuex-persistedstate";
  import goods from "@/store/modules/goods";
  import user from "@/store/modules/user";
  import cart from "@/store/modules/cart";
  Vue.use(Vuex);
  const store = new Vuex.Store({
  	plugins:[
  		// 1- 将全部数据进行缓存,缓存至名字为vuex的storage中
  		// createPersistedState()
  		
  		// 2- 指定保存的名字
  		// createPersistedState({
  		// 	key:"zhangpeiyue"
  		// })
  		
  		// 3- 指定保存的数据
  		createPersistedState({
  			key:"zhangpeiyue",// localStorage的名字
  			// 指定保存的数据
  			paths:["num","goods.num","goods.goodsList","cart.cartList"]
  		})
  	],
  	state:{
  		num:10
  	},
  	mutations:{
  		CHANGE_NUM(state,num){
  			state.num = num;
  		}
  	},
  	getters:{
  	
  	},
  	actions:{
  	
  	},
  	modules:{
  		goods,
  		user,
  		cart
  	}
  })
  export default store;
  ```

### 17-6-11- 缓存组件 keep-alive

* src->vies->Index.vue

  ```vue
  <template>
      <div>
          <nav>
              <router-link exact to="/">添加商品</router-link>|
              <router-link to="/goodsList">商品列表</router-link>|
              <router-link to="/myCart">我的购物车</router-link>
          </nav>
          <hr/>
          <!--1-缓存所有的组件 -->
  <!--        <keep-alive>-->
  <!--            <router-view></router-view>-->
  <!--        </keep-alive>-->
  
          <!--  为AddGoods组件增加缓存      -->
  <!--        <keep-alive include="AddGoods">-->
  <!--            <router-view></router-view>-->
  <!--        </keep-alive>-->
  
          <!-- 为组件AddGoods,GoodsList增加缓存 -->
  <!--        <keep-alive include="AddGoods,GoodsList">-->
  <!--            <router-view></router-view>-->
  <!--        </keep-alive>-->
  
  
         <!-- 不缓存名字为AddGoods的组件-->
  <!--        <keep-alive exclude="AddGoods">-->
  <!--            <router-view></router-view>-->
  <!--        </keep-alive>-->
  
          <!-- 不缓存名字为AddGoods,GoodsList的组件-->
  <!--        <keep-alive exclude="AddGoods,GoodsList">-->
  <!--            <router-view></router-view>-->
  <!--        </keep-alive>-->
  
  
          <!-- 根据路由配置决定是否缓存-->
          <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
  
      </div>
  </template>
  
  <script>
  export default {
      name: "Index"
  }
  </script>
  
  <style lang="less" scoped>
      nav{
          a{
              margin:10px;
              color:skyblue;
          }
          .a-active{
              color:red;
          }
      }
  </style>
  ```

* src->views->AddGoods.vue

  ```vue
  <template>
      <form ref="goodsForm">
          <input v-model.number="num" type="text" placeholder="测试">
          <input v-model.number="num2" type="text" placeholder="测试2">
          <p>商品名称：<input name="goodsName" type="text"></p>
          <p>商品价格：<input name="goodsPrice" type="text"></p>
          <button @click.prevent="addGoods">添加商品</button>
      </form>
  </template>
  
  <script>
  import {mapMutations} from "vuex";
  export default {
      name: "AddGoods",
      data(){
        return {
            time:Date.now()
        }
      },
      methods:{
          addGoods(){
              // 1
              // const goodsName = this.$refs.goodsForm.goodsName.value.trim();
              // const goodsPrice = this.$refs.goodsForm.goodsPrice.value.trim()/1;
  
              // 2
              const formdata = new FormData(this.$refs.goodsForm);
              const goodsName = formdata.get("goodsName").trim();
              const goodsPrice = formdata.get("goodsPrice").trim()/1;
  
              if(goodsName.length === 0 || goodsPrice.length === 0){
                  alert("请输入正确的商品信息");
                  return;
              }
              if(this.$store.state.goods.goodsList.some(v=>v.goodsName === goodsName)){
                  alert("您添加的商品已存在 ")
                  return;
              }
  
              // 将表单数据放置到仓库中1-完整写法
              // this.$store.commit("goods/ADD_GOODS_LIST",{goodsName,goodsPrice});
  
              // 将表单数据放置到仓库中2-简写
              // this.ADD_GOODS_LIST({goodsName,goodsPrice});
  
              // 将表单数据放置到仓库中3-简写
              this.addGoodsList({goodsName,goodsPrice});
  
              this.$router.push("/goodsList");
          },
          ...mapMutations("goods",["ADD_GOODS_LIST"]),
          ...mapMutations("goods",{
              addGoodsList:"ADD_GOODS_LIST"
          })
      },
      computed:{
          num:{
              get(){
                  return this.$store.state.goods.num;
              },
              set(v){
                  this.$store.commit("goods/CHANGE_NUM",v);
                  // console.log(v);
              }
          },
          num2:{
              get(){
                  return this.$store.state.num
              },
              set(v){
                  this.$store.commit("CHANGE_NUM",v)
              }
          }
      },
      // 在mounted之后执行
      activated() {
          // 开启定时器
          console.log("addGoods->activated",Date.now()-this.time)
      },
      // 下一个路由挂载完毕后执行
      deactivated() {
          // 清除定时器
          console.log("addGoods->deactivated")
      },
      mounted(){
          console.log("addGoods->mounted");
      },
      destroyed() {
          console.log("addGoods->destroyed")
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

### 17-6-12- 路由懒加载

> 懒加载不会一次性的将组件资源进行加载，而是当需要时才会加载，一旦加载过去不会再次加载。

* src->router->index.js

```js
import Vue from "vue";
import VueRouter from "vue-router";
// 1- 不会进行懒加载
// import Index from "@/views/Index";
// import Login from "@/views/Login";
// import AddGoods from "@/views/AddGoods";
// import GoodsList from "@/views/GoodsList";
// import MyCart from "@/views/MyCart";

// 2- 使用懒加载:将每一个组件作为一个JS文件
// const Index = ()=>import("@/views/Index");
// const Login = ()=>import("@/views/Login");
// const AddGoods = ()=>import("@/views/AddGoods");
// const GoodsList = ()=>import("@/views/GoodsList");
// const MyCart = ()=>import("@/views/MyCart");

// 3- 使用懒加载:将多个组件指定到某一个JS文件中
// const Index = ()=>import("@/views/Index");
// const Login = ()=>import("@/views/Login");
// const AddGoods = ()=>import(/*webpackChunkName:'one'*/"@/views/AddGoods");
// const GoodsList = ()=>import(/*webpackChunkName:'one'*/"@/views/GoodsList");
// const MyCart = ()=>import(/*webpackChunkName:'two'*/"@/views/MyCart");

// 4- 懒加载:通过require-->将每一个组件指定一个JS文件 .
const Index = resolve=>require(["@/views/Index"],resolve);
const Login = resolve=>require(["@/views/Login"],resolve);
const AddGoods = resolve=>require(["@/views/AddGoods"],resolve);
const GoodsList = resolve=>require(["@/views/GoodsList"],resolve);
const MyCart = resolve=>require(["@/views/MyCart"],resolve);


Vue.use(VueRouter);
const routes = [
	{
		path:"/",
		component:Index,
		children:[
			{
				path:"/",
				component:AddGoods,
				meta:{
					isAuthor:true,// 需要验证是否登陆过
					title:"添加商品页面",
					keepAlive:true
				}
				
			},{
				path:"/goodsList",
				component: GoodsList,
				meta:{
					isAuthor:true,// 需要验证是否登陆过
					title:"商品列表界面"
				}
			},{
				path:"/myCart",
				component: MyCart,
				meta:{
					isAuthor:true,// 需要验证是否登陆过
					title:"我的购物车界面"
				}
			}
		]
	},{
		path:"/login",
		component:Login,
		meta:{
			title:"登陆界面"
		}
	}
]
const router = new VueRouter({
	mode:"history",
	linkActiveClass:"a-active",
	routes
});
router.beforeEach(function(to,from,next){
	// console.log(to.meta.isAuthor);
	// 1- 判断路由是否需要进行验证
	if(to.meta.isAuthor){
		// 2- 进行验证
		if(localStorage.getItem("userName")){
			// 验证成功
			next();
		}else next("/login?go="+to.fullPath);
	}else next();
})
router.afterEach(function(to){
	document.title = to.meta.title;
})
export default router;
```





# 十八- 插槽

## 18-1- 匿名插槽

* src->App.vue

  ```vue
  <template>
      <div>
          <BookList :bookList="wuxia">
              <h3 :style="{color:'green'}">武侠小说</h3>
          </BookList>
          <hr/>
          <BookList :bookList="yanqing">
              <h3 :style="{color:'pink'}">言情小说</h3>
          </BookList>
      </div>
  
  </template>
  
  <script>
  import BookList from "@/components/BookList";
  export default {
      name: "App",
      data(){
          return {
              wuxia:[
                  {
                      id:1,
                      bookName:"天龙八部"
                  },{
                      id:2,
                      bookName: "圆月弯刀"
                  }
              ],
              yanqing:[
                  {
                      id:11,
                      bookName:"像雾像雨又像风"
                  },{
                      id:21,
                      bookName: "三体"
                  }
              ]
          }
      },
      components:{
          BookList
      }
  }
  </script>
  
  <style scoped>
  </style>
  ```

* src->components->BookList.vue

  ```vue
  <template>
      <div>
          <slot></slot>
          <p v-for="item in bookList" :key="item.id">{{item.bookName}}</p>
      </div>
  </template>
  
  <script>
  export default {
      name: "bookList",
      props:["bookList"]
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

## 18-2- 具名插槽

* src->App.vue

  ```vue
  <template>
      <div>
  <!--具名插槽在使用时可以采用简写 #名字-->
          <BookList v-slot:header :bookList="wuxia">
              <h3 :style="{color:'green'}">武侠小说</h3>
          </BookList>
          <hr/>
          <BookList #header :bookList="yanqing">
              <h3 :style="{color:'pink'}">言情小说</h3>
          </BookList>
      </div>
  
  </template>
  
  <script>
  import BookList from "@/components/BookList";
  export default {
      name: "App",
      data(){
          return {
              wuxia:[
                  {
                      id:1,
                      bookName:"天龙八部"
                  },{
                      id:2,
                      bookName: "圆月弯刀"
                  }
              ],
              yanqing:[
                  {
                      id:11,
                      bookName:"像雾像雨又像风"
                  },{
                      id:21,
                      bookName: "三体"
                  }
              ]
          }
      },
      components:{
          BookList
      }
  }
  </script>
  
  <style scoped>
  </style>
  ```

* src->components->BookList.vue

  ```vue
  <template>
      <div>
          <slot name="header"></slot>
          <slot name="header"></slot>
          <slot name="header"></slot>
          <p v-for="item in bookList" :key="item.id">{{item.bookName}}</p>
      </div>
  </template>
  
  <script>
  export default {
      name: "bookList",
      props:["bookList"]
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  

## 18-3- 作用域插槽

> 可以在父组件中调用子组件中的数据。

* src->App.vue

  ```vue
  <template>
      <div>
          <BookList v-slot:default="propSlot">
              <div v-for="(item,index) in propSlot.userList" :key="index">
                  {{item}}
              </div>
          </BookList>
          <hr/>
          <BookList v-slot="propSlot">
              <div v-for="(item,index) in propSlot.userList" :key="index">
                  {{item}}
              </div>
          </BookList>
          <hr/>
          <BookList #default="propSlot">
              <div v-for="(item,index) in propSlot.userList" :key="index">
                  {{item}}
              </div>
          </BookList>
      </div>
  
  </template>
  
  <script>
  import BookList from "@/components/BookList";
  export default {
      name: "App",
      components:{
          BookList
      }
  }
  </script>
  
  <style scoped>
  </style>
  ```

* src->components->BookList.vue

  ```vue
  <template>
      <div>
          <h3>BookList</h3>
          <slot :userList="userList"></slot>
      </div>
  </template>
  
  <script>
  export default {
      name: "bookList",
      data(){
          return {
              userList:["zhangsan","lisi","wangwu","zhaoliu"]
          }
  
      }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  












https://api.github.com/search/repositories?q=r&sort=stars

https://api.github.com/search/users?q=r&sort=stars
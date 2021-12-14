import style from "../css/style.module.css"
// import Icon from '../component/icon/index';
import React, { Component } from "react";
import Router from 'next/router'
// import '../app.css'
import Head from 'next/head'
class Index extends Component {
  constructor(color, radius, v, angle, x, y) {
    super();
    this.color = color;
    this.radius = radius;
    this.v = v;
    this.angle = angle;
    this.x = x;
    this.y = y;
    // 创建一个 ref 来存储 canvas 的 DOM 元素
    this.canvas = React.createRef();
  }
  handleClick = (item) => {
    console.log('click ');
    // this.props.history.push("/home");
    Router.push('/firstpage')
  };
  componentDidMount() {
    //获取真实canvasDOM
    const canvas = this.canvas.current;
    //圆对象数组
    let arr = [];
    //圆数量
    const CNT = 50;
    //绘制区域中心点
    let centerX, centerY;
    //绘制上下文
    const ctx = canvas.getContext("2d");
    //设置canvas满屏
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //设置中心点
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    //实例化圆
    for (let i = 0; i < CNT; i++) {
      let c1 = new Index(
        //随机颜色
        "rgba(" +
        255 * Math.random() +
        "," +
        255 * Math.random() +
        "," +
        255 * Math.random() +
        "," +
        Math.random() +
        ")",
        //随机半径
        66 * Math.random() + 1,
        //随机速度
        4 * Math.random() + 1,
        //随机角度
        360 * Math.random(),
        //x坐标
        centerX,
        //y坐标
        centerY
      );
      arr.push(c1);
    }

    function draw() {
      //清除画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < CNT; i++) {
        //移动x坐标
        arr[i].x += arr[i].v * Math.cos(arr[i].angle);
        //移动y坐标
        arr[i].y += arr[i].v * Math.sin(arr[i].angle);
        //反弹（angle在笛卡尔坐标系）
        if (arr[i].y < arr[i].radius) {
          //上
          arr[i].angle = 0 - arr[i].angle;
        }
        if (arr[i].y > canvas.height - arr[i].radius) {
          //下
          arr[i].angle = 0 - arr[i].angle;
        }
        if (arr[i].x < arr[i].radius) {
          //左
          arr[i].angle = Math.PI - arr[i].angle;
        }
        if (arr[i].x > canvas.width - arr[i].radius) {
          //右
          arr[i].angle = Math.PI - arr[i].angle;
        }
        //调用圆的绘制方法
        arr[i].draw(ctx);
      }
      //延迟50ms
      setTimeout(draw, 42);
    }
    //调用绘制
    draw();
  }

  /**
   * 绘制圆
   * @param  ctx 绘制上下文
   */
  draw(ctx) {
    //开始绘制路径
    ctx.beginPath();
    //绘制圆
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    //关闭绘制路径
    ctx.closePath();
    //设置fill颜色
    ctx.fillStyle = this.color;
    //fill
    ctx.fill();
  }

  render() {
    return (
      <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
        <div className={style.content1}>
            <div className="ab" onClick={()=>{this.handleClick()}} >
                 <span>下</span>
                 <span>面</span>
                 <span>进</span>
                 <span>行</span>
                 <span>小</span>
                 <span>组</span>
                 <span>展</span>
                 <span>示</span>
             </div>
             <div className={style.group}>
               <span>小组成员:</span>
               <span>付艺锦,程嘉龙,杜佳怡,马丞,杨涵,王勤勤,易宇腾,罗琪玮,王彦军,张超,黑纪源</span>
             </div>
               <canvas ref={this.canvas} className={style.circle}></canvas>
        </div>

      </>
    )  
  }
}


export default Index;
  

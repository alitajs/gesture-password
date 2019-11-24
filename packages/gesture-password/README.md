<h1 align="center">
  Gesture Password (手势密码)
</h1>

<img height="300" src="https://user-images.githubusercontent.com/11746742/68995608-735b4a00-08ca-11ea-8402-2d5229beaceb.png"></img>

## install

```
// npm
npm install @alitajs/gesture-password --save

// yarn
yarn add @alitajs/gesture-password
```

## usage

```
import GesturePassword from '@alitajs/gesture-password';

const config = {
  id: 'gesture',
  width: 375,
  height: 300,
  onChange: (data: any) => console.log(data) // get gesture password
}

const gesturePassword = new GesturePassword(config)

<canvas id='gesture' />
```

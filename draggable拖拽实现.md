# 拖拽实现
>兼容left和margin样式样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .div{
            position: relative;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 100px;
            background: #dcdcdc;
            cursor: all-scroll;
        }
    </style>
</head>
<body>
    <div class="div" id="div">

    </div>
    <script>
        let div = document.getElementById('div')
        div.addEventListener('mousedown',function(event){
            let initEvent = event
            let divInitData = {
                left: window.getComputedStyle(div).left,
                top: window.getComputedStyle(div).top
            }
            divInitData.left = window.getComputedStyle(div).left
            divInitData.top = window.getComputedStyle(div).top
            let down = true

            let mouseMoveHandel = function(event){
                if(!down) return
                down = false
                setTimeout(function(){
                    let left = event.clientX - initEvent.clientX
                    let top = event.clientY - initEvent.clientY
                    if(divInitData.left){
                        div.style.left = parseInt(divInitData.left) + left + 'px'
                    }else{
                        div.style.left = left + 'px'
                    }
                    if(divInitData.top){
                        div.style.top = parseInt(divInitData.top) + top + 'px'
                    }else{
                        div.style.top = top + 'px'
                    }
                    down = true
                },16)
            }
            div.addEventListener('mousemove',mouseMoveHandel,false)
            document.addEventListener('mouseup',function(){
                div.removeEventListener('mousemove',mouseMoveHandel)
            },false)
        },false)
        
    </script>
</body>
</html>
```
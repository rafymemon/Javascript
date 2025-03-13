
# Events

## onclick
```javascript
 document.getElementById('elementName').addEventListner('click', function() {
    alert("Element is clicked")
    }
 )
```

## attachElement
 type, timestamp, defaultPrevented
 target, toElement, srcElement, currentTarget
 interview related : clientX, clientY, screenX, screenY
    //altKey, ctrlKey, shiftKey, keyCode

```javascript
    document.getElementById('elementName').addEventListner('click', function(e){
    console.log(e)
    }, false)
    
```

## Event Propagation
i. Event bubbling: means bubbling up of events from inside elements to outside elements, like here image-2 is the child of image therefore when clicked on image-2 ("Clicked the image-2") appeared first and then ("image-2") appeared goung from inner id to outer id.
ii. Capturing Mode : When the outer class appeared first then the inner class. If we change the false value of above mentioned code to True then on clicking the image-2 first the outer class code will be appeared then the inner id code    
```javascript
document.getElementById('images').addEventListner('click', function(e){
    console.log("Clicked inside the image")
    }, false )

document.getElementById('image-2').addEventListner('click', function(e) {
    console.log("Clicked the image-2")
}, false)

    
```

## stop propogation
stop propogation is used to restain from bubbling and capturing mode.
```javascript

document.getElementById('image-2').addEventListner('click', function(e){
    console.log(e)
    e.stopPropogation()
}, false)
```

## PreventDefault
This method is used to prevent the default behaviour of an event from occuring.
```javascript
 document.getElementById('google').addEventListner('click', function(e){
    e.preventDefault()
    e.stopPropogation()
    console.log(e)
 }, false)
```

## Removing an event when clicking
Remove() is used to remove an element when clicking on it.
```javascript
    document.querySelector('#images').addEventListener('click', function(e){
        // console.log(e.target.parentNode())
        // let removeIt = e.target.parentNode()
        // removeIt.remove() 

        console.log(e.target.tagName);
        if(e.target.tagName === 'IMG') {
            console.log(e.target.id)
            let removeIt = e.target.parentNode;
            removeIt.remove()
            e.stopPropogation()
        }

        //removeIt.parentNode.removeChild(removeIt)
    }, false)
```


# Asynchronous Javascript
In asynchronous execution, JavaScript does not wait for tasks to complete. It moves to the next operation while waiting for longer tasks (like API requests, timers, or file reading) to finish in the background.

Functions window object provide 
### setTimeOut

```javascript
setTimeout(function() {
        console.log("Hey there, I am a message from setTimeout");
        
    }, 2000)

// reference of the handler/function can be given in the setTimeout function
    const printMessage = () => {
        console.log("Hey there, I am a message from setTimeOut");
    }
    setTimeout(printMessage, 2000)

```

### clearTimeout
Used to stop the timeout function to proceed

```javascript
const stoptheMessage = setTimeout(printMessage, 2000);

   document.querySelector('#button').addEventListener('click', () => {
        clearTimeout(stoptheMessage);
        console.log("stopped");
        
   })

```


### setInterval and clearInterval

```javascript
const sayDate = (str) => {
        console.log(str, Date.now());
        
    }

    let start;

    document.querySelector("#start").addEventListener('click', ()=> {
        start = setInterval(sayDate, 1000, "Hey Setinterval is working")
        console.log("started");
    })
   

   document.querySelector("#stop").addEventListener('click', () => {
    clearInterval(start);
    console.log("stopped");
   })

```
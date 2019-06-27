# AV3-fetch

该模块作用是解析文件。

# API参考与算法解析：  

AV3.blob(input[, init])|AV3.buffer(input[, init])|AV3.text(input[, init])|AV3.json(input[, init]) :  
利用fetch读取数据二进制数据，input为输入的url,init为可选的配置文件，通常为json，可以从底层调用fetch方法，他们的结果返回的都是fetch的结果(Promise对象)对应不同resolves的结果，blob返回response.blob()，buffer返回response.arrayBuffer()，text返回response.text()，json返回response.json().  

AV3.xml(input[, init])|AV3.html(input[, init])|AV3.svg(input[, init]):  
将结果解析为text，然后解析为html，源代码中用到DOM操作DOMParser来解析文本，parseFromString第一个参数为要解析的文件，可将第二个参数设为不同的值得到不同的解析结果html/xml/svg.  

AV3.image(input[, init]):  
使用Promise异步加载图像，使用方法见text.js中。  

AV3.dsv(delimiter, input[, init][, row])|AV3.tsv(input[, init][, row])|AV3.csv(input[, init][, row])： 
通过前面text函数得到的结果进行解析，在调用dsv库中的三个函数进行解析，csvParse、dsvFormat、tsvParse，分割符分别是逗号、自定义、制表符。使用方法：  
`
AV3.dsv(",", "test.csv", function(d) {
  return {
    year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
    make: d.Make,
    model: d.Model,
    length: +d.Length // convert "Length" column to number
  };
}).then(function(data) {
  console.log(data);
});
`  
通过一个可选的row函数，可以对数据的结果进行调整。

# 总结  
前面的一些方法我认为是比较基础的接口，做可视化应用一般使用不到，只是用来方便高层接口的调用。  
AV3-fetch内部使用异步调用fetch方法，对数据进行读取，可将数据转化为blob、buffer、text、json、xml、html、svg，同样也可以读取图片，内部使用Promise进行读取，可以用then方法进一步处理加载好的图片。
另外，我认为最方便的是读取csv、以及自定义分隔符的文本数据，这也是在可视化中经常处理的格式，所以最后这个高层接口csv最为好用。
高层接口：AV3.dsv()、AV3.tsv()、AV3.csv()  

其他：我把可以测试的代码在test.js中进行了测试，同样也展示了如何使用。d3中的接口非常细致，一些非常底层的接口是几乎用不到的，而高层接口才是简单好用的，我把他们进行了分类。
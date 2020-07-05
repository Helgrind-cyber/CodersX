# Express JS from [Coders-x](coders-x.com)

## Bài 1: Khởi tạo project ExpressJS
- `npm init`
- `npm install express --save`
## Bài 2: Template engine - [Pug](https://pugjs.org/api/getting-started.html)
- Khác nhau giữa Single Page Application(SPA) và Multiple Page Application(MPA)
- Thường sử dụng Pug(Jade), Mustache, ejs. Pug phổ biến hơn
- `npm install pug --save`
    + set template `app.set('view engine', 'pug')`
    + set folder template `app.set('views', './views')`
- Sử dung method `render` để render code pug.
- Truyền dữ liệu từ render đến views
## Bài 3: Query paramenters `?key=value`
- log ra `req.query` hien thi query

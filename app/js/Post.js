export default class Post {
  constructor(title, image) {
    (this.title = title), (this.image = image), (this.datetime = new Date());
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      datetime: this.datetime,
      image: this.image,
    });
  }
}

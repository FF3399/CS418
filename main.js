// JavaScript Document
function Post(title, date, author, tags, content) {
  this.title = title;
  this.date = date;
  this.author = author;
  this.tags = tags;
  this.content = content;
           
}
var Post1 = new Post("News 1", "Spetmeber 1, 2018", "Tim Green", ["news", "collge", "local"], "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis hendrerit velit. Cras tempus justo volutpat sagittis consectetur. Proin a feugiat sapien, ac egestas dolor. Vestibulum consequat justo dapibus eros sodales, in accumsan enim varius. In in erat at velit sodales pretium. Integer ultrices consectetur tortor eget aliquet. Mauris dignissim sapien a nunc dapibus ultrices. Phasellus mi turpis, fermentum eu nunc vitae, varius blandit urna. Donec pulvinar urna sit amet lectus porttitor bibendum.");

var Post2 = new Post("News 2", "Spetmeber 2, 2018", "Tom Green", ["news", "collge", "local"], "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis hendrerit velit. Cras tempus justo volutpat sagittis consectetur. Proin a feugiat sapien, ac egestas dolor. Vestibulum consequat justo dapibus eros sodales, in accumsan enim varius. In in erat at velit sodales pretium. Integer ultrices consectetur tortor eget aliquet. Mauris dignissim sapien a nunc dapibus ultrices. Phasellus mi turpis, fermentum eu nunc vitae, varius blandit urna. Donec pulvinar urna sit amet lectus porttitor bibendum.");

var Post3 = new Post("News 3", "Spetmeber 3, 2018", "Tam Green", ["news", "collge", "local"], "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis hendrerit velit. Cras tempus justo volutpat sagittis consectetur. Proin a feugiat sapien, ac egestas dolor. Vestibulum consequat justo dapibus eros sodales, in accumsan enim varius. In in erat at velit sodales pretium. Integer ultrices consectetur tortor eget aliquet. Mauris dignissim sapien a nunc dapibus ultrices. Phasellus mi turpis, fermentum eu nunc vitae, varius blandit urna. Donec pulvinar urna sit amet lectus porttitor bibendum.");

function print2() {
        return Post2.author;
    }



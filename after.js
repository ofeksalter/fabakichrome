// this code will be executed after page load
var videos;
var video_titles = [];

function getVideos()
{
  videos = document.getElementsByClassName("yt-img-shadow");
  videos = [...videos];
  videos = videos.slice(3);
}

function getVideosTitles()
{
  video_titles_temp = document.getElementsByTagName("yt-formatted-string");
  video_titles_temp = [...video_titles_temp];
  for (video_title of video_titles_temp)
  {
    if (video_title.id == "video-title")
    {
      video_titles.push(video_title);
    }
  }
}


(function() {
})();

setTimeout(() => {
  const image = "https://i.ytimg.com/vi/yeRbmgX9evc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkwcv-emsmqUniABQT9XE7pPCyxw";
  getVideos();
  getVideosTitles();
  console.log(videos);
  console.log(video_titles);
  for (video of videos)
  {
    video.src = image;
  }
  for (video_title of video_titles)
  {
    video_title.innerHTML = "נונו - ליבינג דה דרים | Nunu - Living The Dream";
    video_title.ariaLabel = "נונו - ליבינג דה דרים | Nunu - Living The Dream by nunu 6 months ago 3 minutes, 1 second 2,471,416 views";
    title_parent = video_title.parentNode;
    title_parent.ariaLabel = "נונו - ליבינג דה דרים | Nunu - Living The Dream by nunu 6 months ago 3 minutes, 1 second 2,471,416 views";
    title_parent.href = "/watch?v=yeRbmgX9evc";
    title_parent.title = "נונו - ליבינג דה דרים | Nunu - Living The Dream";

    /*video_meta = title_parent.parentNode.parentNode;
    metadata = video_meta.getElementsByClassName("ytd-video-meta-block");
    channel_name = metadata.getElementsByTagName("ytd-channel-name")[0];
    channel_name.getElementsByTagName("a")[0].innerHTML = "nunu";*/
  }

}, 2000);
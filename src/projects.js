import markdown from './thumbnails/markdown.png'
import leaderboard from './thumbnails/leaderboard.png'
import recipebox from './thumbnails/recipebox.png'
import gameoflife from './thumbnails/gameoflife.png'
import jscalc from './thumbnails/calculator.png'
import pomodoro from './thumbnails/pomodoro.png'
import tictactoe from './thumbnails/tictactoe.png'
import simon from './thumbnails/simon.png'
import quote from './thumbnails/randomquote.png'
import twitch from './thumbnails/twitch.png'
import weather from './thumbnails/weather.png'
import wiki from './thumbnails/wiki.png'

let Projects = [{
    "React": [{
        title: "Markdown Previewer",
        link: "https://codepen.io/cscouras/full/NpzmBp/",
        imgsrc: markdown,
        languages: ["React", "Sass", "Marked Library"]
      },
      {
        title: "Camper Leaderboard",
        link: "https://codepen.io/cscouras/full/NjKLWo/",
        imgsrc: leaderboard,
        languages: ["React", "Sass", "Axios Library"]
      },
      {
        title: "Recipe Box",
        link: "https://codepen.io/cscouras/full/MmNzYy/",
        imgsrc: recipebox,
        languages: ["React", "Sass"]
      },
      {
        title: "Game of Life",
        link: "https://codepen.io/cscouras/full/qjRNZm/",
        imgsrc: gameoflife,
        languages: ["React", "Sass"]
      }
    ]
  },
  {
    "Front End": [{
        title: "JavaScript Calculator",
        link: "https://codepen.io/cscouras/full/GjGQNj/",
        imgsrc: jscalc,
        languages: ["HTML5", "CSS3", "JavaScript"]
      },
      {
        title: "Pomodoro Clock",
        link: "https://codepen.io/cscouras/full/XNWyxO/",
        imgsrc: pomodoro,
        languages: ["HTML5", "CSS3", "JavaScript"]
      },
      {
        title: "Tic Tac Toe",
        link: "https://codepen.io/cscouras/full/yVrqVz/",
        imgsrc: tictactoe,
        languages: ["HTML5", "CSS3", "JavaScript"]
      },
      {
        title: "Simon",
        link: "https://codepen.io/cscouras/full/XpzMmx/",
        imgsrc: simon,
        languages: ["HTML5", "CSS3", "JavaScript"]
      },
      {
          title: "Random Quote App",
          link: "https://codepen.io/cscouras/full/rLPEdN/",
          imgsrc: quote,
          languages: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"]
        },
        {
          title: "Local Weather App",
          link: "https://codepen.io/cscouras/full/PzLjXd/",
          imgsrc: weather,
          languages: ["HTML5", "CSS3", "Bootstrap", "JavaScript",
            "jQuery", "Weather Underground API"]
        },
        {
          title: "Wikipedia Viewer",
          link: "https://codepen.io/cscouras/pen/jARxdb",
          imgsrc: wiki,
          languages: ["HTML5", "CSS3",
            "Bootstrap", "JavaScript", "jQuery", "Wikipedia API"]
        },
        {
          title: "Twitch User Status",
          link: "https://codepen.io/cscouras/full/OXZpNz/",
          imgsrc: twitch,
          languages: ["HTML5", "CSS3",
            "Bootstrap", "JavaScript", "jQuery", "Twitch API"]
        }
    ]
  }
]

export default Projects

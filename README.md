# 🎵 Aesthetic Music Player

A cute, retro-inspired music player with a kawaii aesthetic featuring pixel art decorations, smooth playback controls, and a beautiful purple gradient theme.

## 📝 Short Description

An aesthetic music player built with vanilla JavaScript that features a pixel-art style design with Kuromi stickers, pixel hearts, and butterflies. Play, pause, skip tracks, and scrub through your favorite songs with a beautiful purple-themed interface that looks like a handheld gaming device!

---

## ✨ Features

- **🎮 Retro Gaming Aesthetic**: Pixel-style borders and shadows that mimic classic handheld consoles
- **🎨 Kawaii Decorations**: Adorable pixel hearts, Kuromi sticker, and butterfly elements
- **⏯️ Full Playback Controls**: Play, pause, previous, and next track buttons
- **📊 Progress Bar**: Interactive slider to scrub through songs
- **🔄 Playlist System**: Modular playlist structure for easy song management
- **📱 Responsive Design**: Centered layout that works on various screen sizes
- **🎵 Album Art Display**: Shows album cover for each track
- **🎼 Auto-metadata Loading**: Automatically detects song duration

## 🚀 Getting Started

### Installation

1. Clone or download this repository
2. Ensure your file structure looks like this:
   ```
   music-player/
   ├── index.html
   ├── style.css
   ├── script.js
   ├── info.js
   ├── images/
   │   ├── willow.jpg
   │   ├── attention.jpg
   │   ├── ghost.jpg
   │   ├── ours.jpg
   │   └── supernatural.jpg
   ├── songs/
   │   ├── Taylor Swift-Willow.mp3
   │   ├── Attention - Charlie Puth.mp3
   │   ├── Justin Bieber  Ghost.mp3
   │   ├── Taylor Swift-Ours(Taylor's Version).mp3
   │   └── Ariana Grande - supernatural (Lyrics) (mp3cut.net).mp3
   ├── elements/
   │   ├── heart.png
   │   ├── kuromi.png
   │   └── butterfly.png
   └── README.md
   ```
3. Open `index.html` in your browser (or use a local server like Live Server for VS Code)

## 🎵 Adding Your Own Songs

Edit the `info.js` file to add your playlist:

```javascript
export const playlist = [
  {
    songName: "Your Song Title",
    artistName: "Artist Name",
    albumCover: "images/your-album-cover.jpg",
    track: "songs/your-song-file.mp3"
  },
  // Add more songs here...
];
```

## 🎨 Customization

### Changing the Color Scheme

Edit the CSS variables in `style.css`:

```css
/* Main player background */
background-color: #c9b3ff;  /* Light purple */

/* Border color */
border: 4px solid #6b4eff; /* Dark purple */

/* Shadows (pixel-style depth) */
box-shadow:
  4px 4px #b08aff,
  8px 8px #a07cff,
  12px 12px #9070ff;
```

### Adjusting Player Size

Modify the `.player-screen` dimensions:

```css
width: 300px;     /* Player width */
height: 500px;    /* Player height */
```

### Customizing Decorations

Replace the images in the `elements/` folder with your own pixel art or stickers while keeping the same filenames, or update the HTML to reference new decoration images.

## 🎮 How to Use

1. **Play/Pause**: Click the center button to start or pause playback
2. **Next Track**: Click the forward button to skip to the next song
3. **Previous Track**: Click the backward button to go to the previous song
4. **Scrub Timeline**: Drag the progress bar slider to jump to any part of the song
5. **Auto-play**: Songs will queue up automatically as you navigate through the playlist

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Structure and audio element
- **CSS3**: Styling with custom pixel-art aesthetics
- **JavaScript ES6 Modules**: Modular playlist system
- **Font Awesome**: Icons for control buttons

### Key Features Implementation

- **Module System**: Playlist data separated into `info.js` for easy maintenance
- **Circular Navigation**: Previous/next buttons wrap around the playlist
- **State Management**: Toggle system for play/pause functionality
- **Real-time Updates**: Progress bar syncs with audio playback
- **Metadata Handling**: Automatic duration detection when songs load

## 📱 Device Support

- 💻 Desktop browsers
- 📱 Mobile browsers (touch-friendly controls)
- 📲 Tablet devices

## 💡 Future Enhancements

Potential features to add:

- 🔀 Shuffle mode
- 🔁 Repeat mode (single song or playlist)
- 🔊 Volume control slider
- 📝 Display current time / total duration
- 🎨 Multiple theme options
- 📋 Display full playlist with click-to-play
- 🌙 Dark/light mode toggle
- 📥 File upload to add songs dynamically

## 🎨 Design Credits

- **Aesthetic**: Inspired by retro gaming handhelds and Y2K kawaii culture
- **Color Palette**: Purple gradient theme
- **Icons**: Font Awesome free icons

## 🤝 Contributing

Want to make this music player even better? Here are some ideas:

- Add visualizer animations
- Create additional themes
- Implement lyrics display
- Add equalizer controls
- Create playlist management UI

## 📄 License

This project is open source and available for personal and commercial use.

---

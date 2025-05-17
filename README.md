# 🎬 SmartStream – An AI-Powered Netflix Clone

SmartStream is a full-featured Netflix clone built using **JavaScript (Node.js, React)** with **AI/NLP-powered Smart Search**, personalized recommendations, and rich media browsing experience using the **TMDb API**.

## 🚀 Features

### ✅ Core Features
- User authentication & profile management
- Movie & TV show browsing by genre, rating, etc.
- Watch trailers and view descriptions
- Search with movie names, genres, or natural language
- Save to watchlist & track history

### 🤖 AI-Powered Features
- **Smart Search (NLP):** Understands natural language queries like  
  _“show me emotional war movies”_ or _“I want comedy with drama”_
- **Semantic Matching:** Finds similar content even if exact title isn’t matched
- **User-based Personalization:** Learns user preferences from history



## 🔍 Usage Examples

Try the following queries in the search bar:

- `"movies with friendship and betrayal"`
- `"classic action films from the 50s"`
- `"funny movies with drama"`
- `"I want a touching story with war background"`

Smart search interprets context and meaning, not just keywords.

## 🧠 Tech Stack

### 🌐 Frontend
- React.js
- Tailwind CSS
- Axios
- React Router

### 🖥 Backend
- Node.js (ESM)
- Express
- MongoDB & Mongoose
- JWT Authentication
- dotenv for env variables

### 🤖 AI / NLP
- Sentence-transformers (`all-MiniLM-L6-v2`)
- Python-based embedding generation (served locally or cached)
- JSON vector matching using cosine similarity

## 🛠️ Setup Instructions

### 🔑 Get TMDb API Key
- [TMDb](https://developer.themoviedb.org/) → Create account → Get API token

### 🔧 Clone the repo
```bash
git clone https://github.com/AmanKumar2202/mern-netflix-clone
cd mern-netflix-clone
```

### 📦 Install dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

### 🧪 Environment Variables

Create `.env` in the `server/` folder:

```env
TMDB_API_KEY=your_tmdb_bearer_token
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 📊 Run the App

#### Backend
```bash
cd backend
npm run dev
```

#### Frontend
```bash
cd frontend
npm run dev
```

### 🧠 NLP Model Setup

- Run the Python script to generate `movie_data.json` with embedded vectors.
- Set up a local Python server or precompute and use `.json` file for smart search.

> **Note:** The NLP script uses `sentence-transformers`. Make sure to install it:
```bash
pip install sentence-transformers
```

## ☁️ Deployment Guide

### 🔼 Frontend (Vercel)
1. Push `frontend` folder to GitHub
2. Connect repo to [Vercel](https://vercel.com/)
3. Set `npm run build` as the build command and `dist` as the output directory

### 🔼 Backend (Render)
1. Push `backend` folder to GitHub
2. Go to [Render](https://render.com/), create new Web Service
3. Set `npm run dev` or `npm start` as start command
4. Add environment variables

## 📁 Folder Structure

```
├── client/                  # React frontend
├── server/
│   ├── controllers/         # Route logic
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express routes
│   ├── utils/               # fetchFromTMDB, NLP helpers
│   └── movie_data.json      # Movie embeddings for smart search
├── README.md
```


## 🧠 Inspiration

Built to learn and integrate AI into real-world apps and enhance the movie discovery experience beyond keyword-based search.

---

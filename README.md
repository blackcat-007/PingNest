<p align="center">
  <img src="https://res.cloudinary.com/ddcdrrav8/image/upload/v1752391016/Ping_Nest_wkkves.png" alt="PingNest Logo" width="480">
</p>

<blockquote>
  <strong>Note:</strong> PingNest is a fun, themeable, and emotion-aware chat platform built using the MERN stack. It is designed for expressive, real-time conversations with customization, emoji-style tones, and image support.
</blockquote>

<h1 align="center">PingNest</h1>

<p align="center">
  <em>A dynamic & responsive, emotion-driven real-time chat app with theme customization and photo support.</em>
</p>

<hr />

<h2>🔥 Features</h2>

<ul>
  <li><strong>✅ Emotion-Based Messaging:</strong> Choose the tone of your message from a dropdown. Each tone changes the message color — making chats more expressive.</li>
  <li><strong>✅ Theme Customization:</strong> Choose from multiple chat UI themes using DaisyUI.</li>
  <li><strong>✅ Real-Time Messaging:</strong> Messages appear instantly using Socket.IO.</li>
  <li><strong>✅ Chronological Ordering:</strong> Messages are sorted from newest to oldest.</li>
  <li><strong>✅ Online Status Viewer:</strong> See who’s currently active in real-time.</li>
  <li><strong>✅ Image Upload with Cloudinary:</strong> Upload and share photos directly in chat.</li>
</ul>

<hr />

<h2>🛠 Tech Stack</h2>

<table>
  <tr><th>Technology</th><th>Description</th></tr>
  <tr><td><strong>MongoDB</strong></td><td>NoSQL Database</td></tr>
  <tr><td><strong>Express.js</strong></td><td>Backend Framework</td></tr>
  <tr><td><strong>React.js</strong></td><td>Frontend Library</td></tr>
  <tr><td><strong>Node.js</strong></td><td>Runtime Environment</td></tr>
  <tr><td><strong>Socket.IO</strong></td><td>Real-Time Communication</td></tr>
  <tr><td><strong>Cloudinary</strong></td><td>Image Hosting & Delivery</td></tr>
  <tr><td><strong>Tailwind CSS</strong></td><td>Utility-first Styling</td></tr>
  <tr><td><strong>DaisyUI</strong></td><td>Theme & Component Library</td></tr>
  <tr><td><strong>JWT</strong></td><td>Secure Authentication</td></tr>
</table>

<hr />

<h2>📲 Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js >= 14.x</li>
  <li>MongoDB Atlas or local MongoDB</li>
  <li>Cloudinary account (for image uploads)</li>
</ul>

<h3>Clone the Repository</h3>

<pre><code>git clone https://github.com/blackcat-007/PingNest-fullstack.git
cd PingNest-fullstack
</code></pre>

<h3>Set Up Environment Variables</h3>

<pre><code>
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
</code></pre>

<h3>Install Dependencies</h3>

<pre><code>
npm install
cd client && npm install
cd ..
</code></pre>

<h3>Run the App</h3>

<pre><code>
npm run dev
</code></pre>

<p>The backend runs at <code>localhost:5000</code> and frontend at <code>localhost:3000</code></p>

<hr />

<h2>⚙️ App Features in Detail</h2>

<h3>📨 Emotion-Based Messaging</h3>
<ul>
  <li>Message tone dropdown with color-coded styling.</li>
</ul>

<h3>🎨 Theme Customization</h3>
<ul>
  <li>Switch between DaisyUI themes without reloading.</li>
</ul>

<h3>👀 Online Users Panel</h3>
<ul>
  <li>View who's currently active via sockets.</li>
</ul>

<h3>🖼 Image Uploading</h3>
<ul>
  <li>Drag and drop or upload images — stored via Cloudinary.</li>
</ul>

<h3>🔄 Message Sorting</h3>
<ul>
  <li>Newest messages appear first.</li>
</ul>

<hr />

<h2>🚀 Deployment</h2>

<h3>Backend Tips:</h3>
<ul>
  <li>Use <code>dotenv</code> securely</li>
  <li>Enable CORS</li>
  <li>Use MongoDB Atlas</li>
</ul>

<h3>Frontend Tips:</h3>
<ul>
  <li>Run <code>npm run build</code> for production build</li>
  <li>Use platforms like Vercel/Netlify</li>
</ul>

<hr />

<h2>🔒 Security</h2>

<ul>
  <li>Passwords hashed with <code>bcrypt</code></li>
  <li>Authentication via <code>JWT</code></li>
  <li>Image uploads protected with Cloudinary keys in <code>.env</code></li>
</ul>

<hr />

<h2>📄 License</h2>

<p>This project is licensed under the <strong>MIT License</strong>. See the <a href="LICENSE">LICENSE</a> file for details.</p>

<hr />

<h2>👨‍💻 Author</h2>
<p>Made with ❤️ by <a href="https://github.com/blackcat-007">Shubho (blackcat-007)</a></p>

<h2>🤝 Contributing</h2>
<p>Pull requests are welcome. Fork it, improve it, PR it.</p>

<h2>💬 Contact</h2>
<ul>
  <li><a href="https://github.com/blackcat-007">GitHub</a></li>
  <li><a href="https://linkedin.com/in/shubhodeepmukherjeewebdev">LinkedIn</a></li>
 <li><a href="shubhodeepmukherjee24@gmail.com">Gmail</a></li>
</ul>

<hr />

<h2>📸 Screenshots</h2>
<figcaption align="center"> <h3>Sign in & Sign up with quick email id verification system </h3> </figcaption>
<img src="https://res.cloudinary.com/ddcdrrav8/image/upload/v1752390266/Screenshot_2025-07-13_121712_uuzkr6.png" alt="Chat UI Screenshot" width="600" />
<img src="https://res.cloudinary.com/ddcdrrav8/image/upload/v1752390266/Screenshot_2025-07-13_121723_rzp2il.png" alt="Chat UI Screenshot" width="600" />
<figcaption align="center"> <h3> Chatting with tone selection and image support </h3></figcaption>
<img src="https://res.cloudinary.com/ddcdrrav8/image/upload/v1752390266/Screenshot_2025-07-13_121742_bbb4mf.png" alt="Chat UI Screenshot" width="600" />
<img src="https://res.cloudinary.com/ddcdrrav8/image/upload/v1752390293/Screenshot_2025-07-13_121823_vx8jwe.png" alt="Chat UI Screenshot" width="600" />
<img src="https://res.cloudinary.com/ddcdrrav8/image/upload/v1752391215/Screenshot_2025-07-13_124927_xdbkp3.png" alt="Chat UI Screenshot" width="600" />
<figcaption align="center"> <h3>Customise your profile and upload profile picture</h3> </figcaption>
<img src="https://res.cloudinary.com/ddcdrrav8/image/upload/v1752390293/Screenshot_2025-07-13_121838_d7da79.png" alt="Chat UI Screenshot" width="600" />
<figcaption align="center"> <h3>Customise your theme with 32 available themes </h3> </figcaption>
<img src="https://res.cloudinary.com/ddcdrrav8/image/upload/v1752390266/Screenshot_2025-07-13_121918_d3mvsh.png" alt="Chat UI Screenshot" width="600" />
<img src="https://res.cloudinary.com/ddcdrrav8/image/upload/v1752390266/Screenshot_2025-07-13_121905_lietx6.png" alt="Chat UI Screenshot" width="600" />
<img src="https://res.cloudinary.com/ddcdrrav8/image/upload/v1752390266/Screenshot_2025-07-13_121853_nbgd79.png" alt="Chat UI Screenshot" width="600" />


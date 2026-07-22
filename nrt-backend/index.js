const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
const uploadRoutes = require('./routes/uploadRoutes');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const aiRoutes = require('./routes/aiRoutes');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        // Allow all origins (especially all Vercel domains, custom domains, and localhost)
        return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Rate Limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: { message: 'Too many requests from this IP, please try again after 15 minutes' }
});

const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // Limit each IP to 10 login attempts per hour
    message: { message: 'Too many login attempts, please try again after an hour' }
});

app.use('/api/', apiLimiter);
app.use('/api/auth/login', authLimiter);

app.use(express.json());
app.use('/api/upload', uploadRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/estimate', require('./routes/estimateRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/ai', aiRoutes);


// --- Static File Serving ---
// The frontend is deployed separately on Vercel.
// We do not serve static files from here in production.
// const frontendPath = path.join(__dirname, '../NRT FRONTEND/dist');
// app.use(express.static(frontendPath));

// API Routes
app.get('/api/health', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW()');
        res.json({ 
            status: 'OK', 
            time: result.rows[0].now,
            env: {
                PORT_exists: !!process.env.PORT,
                DATABASE_URL_exists: !!process.env.DATABASE_URL,
                EMAIL_USER_exists: !!process.env.EMAIL_USER,
                EMAIL_PASS_exists: !!process.env.EMAIL_PASS,
                EMAIL_USER_val: process.env.EMAIL_USER ? process.env.EMAIL_USER.substring(0, 5) + '...' : null
            }
        });
    } catch (err) {
        console.error('Database connection error', err);
        res.status(500).json({ 
            status: 'Error', 
            message: err.message,
            stack: err.stack,
            env: {
                PORT_exists: !!process.env.PORT,
                DATABASE_URL_exists: !!process.env.DATABASE_URL,
                EMAIL_USER_exists: !!process.env.EMAIL_USER,
                EMAIL_PASS_exists: !!process.env.EMAIL_PASS
            }
        });
    }
});

// --- Catch-All Route ---
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(frontendPath, 'index.html'));
// });

// Start Server
if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;

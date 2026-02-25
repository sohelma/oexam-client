import Link from "next/link";

export const metadata = {
    title: "404 - Not Found",
    description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
    return (
        <div style={styles.body}>
            <div style={styles.dot} />
            <h1 style={styles.h1}>404</h1>
            <div style={styles.line} />
            <p style={styles.p}>
                The page you&apos;re looking for doesn&apos;t exist
                <span style={styles.cursor}>_</span>
            </p>
            <Link href="/" style={styles.a}>
                Return to homepage
            </Link>

            <style>{`
        @keyframes bounce {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .not-found-dot {
          animation: bounce 1.5s infinite;
        }

        .not-found-cursor {
          animation: blink 1s infinite;
        }

        .not-found-link:hover {
          background: #21262d !important;
        }
      `}</style>
        </div>
    );
}

const styles = {
    body: {
        margin: 0,
        minHeight: "100vh",
        background: "#0d1117",
        color: "#c9d1d9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial',
    },
    dot: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        background: "#58a6ff",
        marginBottom: "20px",
        animation: "bounce 1.5s infinite",
    },
    h1: {
        fontSize: "72px",
        fontWeight: 600,
        color: "#f0f6fc",
        margin: 0,
    },
    line: {
        width: "200px",
        height: "1px",
        background: "#30363d",
        margin: "20px auto",
    },
    p: {
        fontSize: "18px",
        color: "#8b949e",
        margin: 0,
    },
    cursor: {
        animation: "blink 1s infinite",
    },
    a: {
        display: "inline-block",
        marginTop: "25px",
        padding: "10px 22px",
        border: "1px solid #30363d",
        borderRadius: "6px",
        textDecoration: "none",
        color: "#c9d1d9",
        transition: "background 0.2s",
    },
};

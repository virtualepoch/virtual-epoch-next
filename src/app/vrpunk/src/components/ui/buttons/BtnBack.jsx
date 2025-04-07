export const BtnBack = ({ onClick }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "64px",
        left: "20px",
        zIndex: 100,
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "rgba(15, 15, 15, 0.3)",
          color: "cyan",
          border: "1px solid rgba(0, 255, 255, 0.5)",
          cursor: "pointer",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)",
          boxShadow: "0 0 10px rgba(0, 255, 255, 0.3)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(0, 255, 255, 0.2)";
          e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.5)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(15, 15, 15, 0.3)";
          e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.3)";
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

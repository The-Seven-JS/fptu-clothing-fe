import React from "react";

function Comment({ username, content, date }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center", // Centers the avatar block and comment vertically
        maxWidth: "600px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* User's Avatar */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center items horizontally
          marginRight: "15px", // Spacing between avatar block and comment
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            // borderRadius: "50%",
            // backgroundColor: "#ddd",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // fontSize: "24px",
          }}
        >
          <img src="/image/user.png" alt="" />
        </div>
      </div>

      {/* Comment Content */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "5px",
          padding: "15px",
          backgroundColor: "#f9f9f9",
          flex: "1", // Ensures the comment content takes up remaining space
        }}
      >
        {/* Username */}
        <div
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        >
          {username}
        </div>

        {/* Comment Text */}
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          {content}
        </p>

        {/* Timestamp */}
        <div
          style={{
            fontSize: "12px",
            color: "#999",
            marginTop: "10px",
            fontStyle: "italic", // Makes the timestamp italic
          }}
        >
          Đăng lúc {date}
        </div>
      </div>
    </div>
  );
}

export default Comment;
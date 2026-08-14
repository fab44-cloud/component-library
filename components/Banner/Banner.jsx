import React from "react"

export default function Banner({ children, status="neutral" }) {
    const validStatuses = ["success", "warning", "error", "neutral"]
    const bannerStatus = validStatuses.includes(status) ? status : neutral

    return (
        <div className={`banner banner-${bannerStatus}`}>
            <div className="banner-icon-container">
                {status === "success" && "✅"}
                {status === "warning" && "⚠️"}
                {status === "error" && "❌"}
                {status === "neutral" && "ℹ️"}
            </div>
            <div className="banner-content">
                {children}
            </div>
        </div>
    )
}

export function BannerTitle({ children }) {
    return <h4>{children}</h4>
}
import React from "react"

export default function Banner({ children, status="neutral" }) {
    const validStatuses = ["success", "warning", "error", "neutral"]
    const bannerStatus = validStatuses.includes(status) ? status : neutral

    return (
        <div className={`banner banner-${bannerStatus}`}>
            <div className="banner-icon-container">
                {status === "success" && "✅"}
            </div>
            <div className="banner-content">
                {children}
            </div>
        </div>
    )
}
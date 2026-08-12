import React from "react"

export default function Badge({ children, color="gray", shape="square" }) {
    const validColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
    
    const badgeColor = validColors.includes(color) ? color : "gray"
    const badgeShape = shape === "pill" ? "pill" : "square"

    const badgeClass = `badge badge-${badgeColor} badge-${badgeShape}`

    return (
        <span className={badgeClass}>
            {children}
        </span>
    )
}
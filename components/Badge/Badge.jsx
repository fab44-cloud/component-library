import React from "react"

export default function Badge({ children, color="gray" }) {
    const validColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
    
    const badgeColor = validColors.includes(color) ? color : "gray"

    const badgeClass = `badge badge-${badgeColor}`

    return (
        <span className={badgeClass}>
            {children}
        </span>
    )
}
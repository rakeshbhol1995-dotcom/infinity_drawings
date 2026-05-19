"use client";

import { useEffect } from "react";

export default function SecurityLayer() {
    useEffect(() => {
        // Disable right-click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Disable keyboard shortcuts for DevTools and View Source
        const handleKeyDown = (e: KeyboardEvent) => {
            // F12
            if (e.key === "F12") {
                e.preventDefault();
            }
            // Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "i") {
                e.preventDefault();
            }
            // Ctrl+Shift+J (Windows/Linux) or Cmd+Option+J (Mac)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "j") {
                e.preventDefault();
            }
            // Ctrl+Shift+C (Windows/Linux) or Cmd+Option+C (Mac) - Element Inspector
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "c") {
                e.preventDefault();
            }
            // Ctrl+U (Windows/Linux) or Cmd+Option+U (Mac) - View Source
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") {
                e.preventDefault();
            }
            // Ctrl+S (Save Page)
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
                e.preventDefault();
            }
        };

        // Disable dragging elements (like images)
        const handleDragStart = (e: DragEvent) => {
            e.preventDefault();
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("dragstart", handleDragStart);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("dragstart", handleDragStart);
        };
    }, []);

    return null; // This component doesn't render anything visually
}

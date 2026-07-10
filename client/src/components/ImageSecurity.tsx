import { useEffect } from "react";

export default function ImageSecurity() {
  useEffect(() => {
    // Disable right-click context menu
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts
    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      // Prevent Print Screen
      if (e.key === "PrintScreen") {
        e.preventDefault();
        alert("Screenshots are disabled on this website.");
        return;
      }

      // Prevent common developer tools shortcuts
      if (
        (e.ctrlKey && e.key === "u") || // Ctrl+U (View Source)
        (e.ctrlKey && e.key === "s") || // Ctrl+S (Save)
        (e.ctrlKey && e.key === "p") || // Ctrl+P (Print)
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Ctrl+Shift+I (DevTools)
        (e.ctrlKey && e.shiftKey && e.key === "J") || // Ctrl+Shift+J (Console)
        (e.ctrlKey && e.shiftKey && e.key === "C") || // Ctrl+Shift+C (Inspect)
        (e.key === "F12") // F12 (DevTools)
      ) {
        e.preventDefault();
        alert("This action is disabled on this website.");
        return;
      }
    };

    // Prevent drag and drop of images
    const disableDrag = (e: DragEvent) => {
      e.preventDefault();
    };

    // Prevent image selection
    const disableSelection = (e: Event) => {
      e.preventDefault();
    };

    // Add event listeners
    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("keydown", disableKeyboardShortcuts);
    document.addEventListener("dragstart", disableDrag);
    document.addEventListener("selectstart", disableSelection);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableKeyboardShortcuts);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("selectstart", disableSelection);
    };
  }, []);

  return null; // This component doesn't render anything
}

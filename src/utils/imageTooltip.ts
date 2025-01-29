interface Position {
  x: number;
  y: number;
}

const TOOLTIP_OFFSET = 15;

export function setupImageTooltip() {
  const wrappers = document.querySelectorAll(".image-tooltip-wrapper");

  wrappers.forEach((wrapper) => {
    const image = wrapper.querySelector(".image-with-tooltip");
    const tooltip = wrapper.querySelector(".image-tooltip") as HTMLElement;

    if (!image || !tooltip) return;

    const updateTooltipPosition = (e: MouseEvent) => {
      const position = calculateTooltipPosition(e, tooltip);

      tooltip.style.left = `${position.x}px`;
      tooltip.style.top = `${position.y}px`;
    };

    image.addEventListener("mouseenter", () => {
      tooltip.classList.add("active");
    });

    image.addEventListener("mouseleave", () => {
      tooltip.classList.remove("active");
    });

    image.addEventListener("mousemove", updateTooltipPosition);
  });
}

function calculateTooltipPosition(
  e: MouseEvent,
  tooltip: HTMLElement,
): Position {
  const x = e.clientX + TOOLTIP_OFFSET;
  const y = e.clientY + TOOLTIP_OFFSET;

  const tooltipRect = tooltip.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let finalX = x;
  let finalY = y;

  if (x + tooltipRect.width > viewportWidth) {
    finalX = x - tooltipRect.width - TOOLTIP_OFFSET * 2;
  }

  if (y + tooltipRect.height > viewportHeight) {
    finalY = y - tooltipRect.height - TOOLTIP_OFFSET * 2;
  }

  return { x: finalX, y: finalY };
}

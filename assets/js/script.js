$(".owl-carousel").owlCarousel({
  margin: 10,
  autoplay: true,
  items: 3,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
  },
});
AOS.init();

$(() => {
  let animationDone = false;

  $(window).on("scroll", () => {
    const metricsSectionTop = $(".key-metrics-card").first().offset().top - $(window).height();
    const currentScroll = $(window).scrollTop();

    if (!animationDone && currentScroll > metricsSectionTop) {
      $(".count").each(function () {
        const $counterElement = $(this);
        const targetValue = parseInt($counterElement.text(), 10);

        $counterElement.prop("Counter", 0).animate(
          { Counter: targetValue },
          {
            duration: 2000,
            step: (now) => $counterElement.text(Math.ceil(now) + "+"),
          }
        );
      });

      animationDone = true;
    }
  });
});

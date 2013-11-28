if ($("html.itinerary").length > 0) {
    scootItinerary = (function () {

        return {
            init: function () {
                this.setItineraryPosition();
                this.onPageReady();
                this.bindEvents();
                this.addAd();

            },
            addAd: function () {
                var ad_1 = $(".ad_1"),
					ad_2 = $(".ad_2"),
					ad_3 = $(".ad_3"),
					close_ad = $(".close_ad"),
					ad2top = $("#content").offset().top + 54;
                ad3left = $("#content").offset().left + 775;
                addad1 = function () {
                    ad_1.find(".close_ad").css({ "top": "0", "right": "0" }).click(function() {
                        $(this).parent().slideUp();
                    });

                };
                addad2 = function () {
                    ad_2.css({ "top": ad2top });
                    /*if(document.documentElement.clientWidth<=1024||document.body.offsetWidth<=1024){	
                    ad_2.find("img").css("width","225px");
                    }*/
                    ad_2.find(".close_ad").css({ "top": "0", "right": "0" }).click(function () {
                        $(this).parent().slideUp();
                    })
                    window.onscroll = function () {
                        var scroll_top = document.documentElement.scrollTop || document.body.scrollTop;
                        if (scroll_top > ad2top) {
                            ad_2.stop().animate({ "top": scroll_top }, 500);
                        } else {
                            ad_2.stop().animate({ "top": ad2top });
                        }
                    }
                };

                ad_3.css({ "left": ad3left, "bottom": "10px" }).find(".close_ad").css({ "bottom": "0", "right": "0" }).click(function () {
                    $(this).parent().slideUp();
                });
                if (document.documentElement.clientWidth <= 1024 || document.body.offsetWidth <= 1024) {
                    ad_3.find("img").css("width", "225px");
                }
                addad1(); addad2();
            },
            setItineraryPosition: function () {
                $(".itinerary_1airline").each(function (index, element) {
                    var plane_airline = $(this).find(".plane_icon"),
						plane_station = $(this).find(".station_icon"),
						plane_datails = $(this).find(".airline_details_line");
                    plane_airline.eq(0).css({ "left": "10px", "top": "10px" });
                    plane_airline.eq(1).css({ "right": "10px", "top": "10px" });
                    plane_datails.eq(0).css({
                        "left": plane_airline.eq(0).width() / 2 + 40,
                        "top": "14px",
                        "width": plane_airline.eq(1).offset().left - plane_airline.eq(0).offset().left - 70
                    });
                });
                $(".itinerary_2airline").each(function () {
                    var plane_airline = $(this).find(".plane_icon"),
						plane_station = $(this).find(".station_icon"),
						plane_datails = $(this).find(".airline_details_line");
                    var datailes
                    plane_airline.eq(0).css({ "left": "10px", "top": "10px" });
                    plane_airline.eq(1).css({ "left": 295 - plane_airline.eq(1).width() / 2, "top": "10px" });
                    plane_datails.eq(0).css({
                        "left": plane_airline.eq(0).width() / 2 + 30,
                        "top": "14px",
                        "width": plane_airline.eq(1).offset().left - plane_airline.eq(0).offset().left - plane_airline.eq(1).width() / 2 - 20
                    });
                    plane_airline.eq(2).css({ "left": 435 - plane_airline.eq(2).width() / 2, "top": "10px" });
                    plane_airline.eq(3).css({ "right": "10px", "top": "10px" });
                    plane_datails.eq(1).css({
                        "left": 455,
                        "top": "14px",
                        "width": plane_airline.eq(3).offset().left - plane_airline.eq(2).offset().left - plane_airline.eq(3).width() / 2 - 20
                    });
                });
                $(".itinerary_3airline").each(function () {
                    var plane_airline = $(this).find(".plane_icon"),
						plane_station = $(this).find(".station_icon"),
						plane_datails = $(this).find(".airline_details_line");
                    plane_airline.eq(0).css({ "left": "10px", "top": "10px" });
                    plane_station.eq(0).css({ "left": 280 - plane_station.eq(0).width() / 2, "top": "10px" });
                    plane_datails.eq(0).css({
                        "left": plane_airline.eq(0).width() / 2 + 30,
                        "top": "14px",
                        "width": (plane_station.eq(0).offset().left - plane_airline.eq(0).offset().left - plane_station.eq(0).width() / 2 - 10)
                    });
                    plane_airline.eq(1).css({ "right": "10px", "top": "10px" });
                    plane_station.eq(1).css({ "left": 480 - plane_station.eq(1).width() / 2, "top": "10px" });
                    plane_datails.eq(1).css({
                        "left": 280 - plane_station.eq(0).width() / 2 + plane_station.eq(0).width() / 2 + 10,
                        "top": "14px",
                        "width": (plane_station.eq(1).offset().left - plane_station.eq(0).offset().left - plane_station.eq(1).width() / 2 - 10)
                    });
                    plane_datails.eq(2).css({
                        "left": 480 - plane_station.eq(1).width() / 2 + plane_station.eq(1).width() / 2 + 10,
                        "top": "14px",
                        "width": (plane_airline.eq(1).offset().left - plane_station.eq(1).offset().left - plane_station.eq(1).width() / 2 - 30)
                    });

                });
                $(".itinerary_4airline").each(function () {
                    var plane_airline = $(this).find(".plane_icon"),
						plane_station = $(this).find(".station_icon"),
						plane_datails = $(this).find(".airline_details_line");
                    plane_airline.eq(0).css({ "left": "10px", "top": "10px" });
                    plane_station.eq(0).css({ "left": 373 - plane_station.eq(0).width() / 2, "top": "10px" });
                    plane_datails.eq(0).css({
                        "left": plane_station.eq(0).width() / 2 + 10,
                        "top": "14px",
                        "width": plane_station.eq(0).offset().left - plane_airline.eq(0).offset().left - 10
                    });
                    plane_airline.eq(1).css({ "right": "10px", "top": "10px" });
                    plane_datails.eq(1).css({
                        "left": 373 + plane_airline.eq(1).width() / 2 - 30,
                        "top": "14px",
                        "width": plane_airline.eq(1).offset().left - plane_station.eq(0).offset().left - 30
                    });
                });

            },

            onPageReady: function () {
                if (window.PIE) {
                    $('.booking_reference_box ,.bkre_ad,.bkre_ad_white,.bkre_ad_white_btn_box,.bkre_ad_picture,.airline_city').each(function () {
                        PIE.attach(this);
                    });
                }
            },

            bindEvents: function () {

            }
        };
    })();

    $(document).ready(function() {
        if ($("html.itinerary").length > 0) {
            scootItinerary.init();
        }
    });
}

var flightItinerary = {
    info: [],
    add: function (jn, fn, isInterline, legs) {
        if (this.info[jn] === undefined) this.info[jn] = [];
        if (this.info[jn].segments === undefined) this.info[jn].segments = [];

        var c = this.info[jn].segments.length, found = false;
        legs.splice(0, 1);
        this.info[jn].segments.push({
            'flightNumber': fn,
            'isInterline': isInterline,
            'legs': legs
        });
    },
    renderAirlinePoint: function (logo, city) {
        var css = logo === 'plane' ? 'plane_icon' : 'station_icon', d = '';
        d += '<div class="' + css + '">';
        d += '<div class="airline_city">';
        d += city;
        d += '</div>';
        d += '</div>';
        return d;
    },
    renderAirlineDetails: function (arg) {
        var d = '';

        d += '<div class="airline_details_line">';
        d += '<div class="airline_details">';
        d += '<div class="airline_date_bg">';
        d += '<span class="airline_date_month">' + arg.month + '</span>';
        d += '<span class="airline_date_year">' + arg.year + '</span>';
        d += '<span class="airline_date_date">' + arg.date + '</span>';
        d += '</div>';
        d += '<div class="airline_flightno">';
        d += 'Flight No : ' + arg.flightNo;
        d += '</div>';
        d += '<div>' + arg.departureTime + ' - ' + arg.arrivalTime + '</div>';
        d += '</div>';
        d += '</div>';

        return d;
    },
    breakdownDate: function (dte) {
        // 15 Nov 2013
        var s = dte.split(' ');
        return {
            date: s[0],
            month: s[1],
            year: s[2]
        };
    },
    isSingleline: function () {
        return (this.info.length === 1) || (this.info.length === 2 && this.info[0].segments.length === 1 && this.info[0].segments[0].legs.length === 1)
    },
    render: function () {

        var d = '', journeyLength = this.info.length, journey, j, segmentLength, s, segment, legLength, l, leg, dte,
        singleLine = this.isSingleline();

        /*if (this.isSingleline()) {*/
        if (singleLine) d += '<div class="itinerary_1airline">';

        for (j = 0; j < journeyLength; j++) {
            journey = this.info[j]
            segmentLength = journey.segments.length;

            if (!singleLine) d += '<div class="itinerary_1airline">';

            for (s = 0; s < segmentLength; s++) {
                segment = journey.segments[s]
                legLength = segment.legs.length;

                for (l = 0; l < legLength; l++) {

                    leg = segment.legs[l];

                    d += (s === 0 && l === 0) ? this.renderAirlinePoint('plane', leg.departureStation) :
                        this.renderAirlinePoint('station', leg.departureStation)

                    // render the details
                    dte = this.breakdownDate(leg.departureDate);

                    d += this.renderAirlineDetails({
                        month: dte.month,
                        year: dte.year,
                        date: dte.date,
                        flightNo: segment.flightNumber,
                        departureTime: leg.departureTime,
                        arrivalTime: leg.arrivalTime
                    });


                    // last flight in the segment
                    if (s === (segmentLength - 1) && l === (legLength - 1))
                        d += this.renderAirlinePoint('plane', this.info[j].segments[s].legs[l].arrivalStation)

                }
            }

            if (!singleLine) d += '</div>';

        }

        if (singleLine) d += '</div>';
        /*}*/

        document.getElementById('flightItinerarySection').innerHTML = d;

        // resize the width of the display to prevent wrapping
        this.resizeWidth()


    },
    getJourneyWidth: function (journey) {
        var c = journey.children.length, sum = 0;
        for (var i = 0; i < c; i++) sum += journey.children[i].clientWidth;
        return sum;
    },
    resizeWidth: function () {
        var d = document.getElementById('flightItinerarySection'), journeys = d.children, c = journeys.length;
        for (var i = 0; i < c; i++) {
            journeys[i].style.width = this.getJourneyWidth(journeys[i]) + 'px';
        }

    }
};

window.addEventListener('load', function () {
    var f = document.getElementById('flightItinerarySection');
    if (f !== null && f !== undefined) flightItinerary.render();
});


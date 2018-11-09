var Registration = function() {

    var LoadComponent = function() {
        $("#morequote").hide();
    }

    var ShowMoreQuote = function() {
        $("#morequote").show();
    }

    var HideMoreQuote = function() {
        $("#morequote").hide();
    }

    return {
        init: function() {
            LoadComponent();

            $("#readmore").on('click', function() {
                ShowMoreQuote();
            });

            $("#shrink").on('click', function() {
                HideMoreQuote();
            });
        }
    }

}();

jQuery(document).ready(function() {
    Registration.init();
});
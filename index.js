$(document).ready(function() {



      
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBpuz1P43ndG6tjcSMwgtJPvTPmmbFP00U",
    authDomain: "awaitintrain.firebaseapp.com",
    databaseURL: "https://awaitintrain.firebaseio.com",
    storageBucket: "awaitintrain.appspot.com",
    messagingSenderId: "818336640266"
  };
  firebase.initializeApp(config);
      

      var tname = "";
      var tDestination = "";
      var tFrequency = "";
      var tnextArrival = "";
      var tminAway = "";

      $("#add-train").on("click", function(){
        event.preventDefault();     

        tname = $("#tname-input").val().trim();
        tDestination = $("#tDestination-input").val().trim();
        tFrequency = $("#tFrequency-input").val().trim();
        tnextArrival = $("#tnextArrival-input").val().trim();
        tminAway = $("#tminAway-input").val().Trim();

        databse.ref().set({

        })
        return false;
      })

      // Firebase watcher + initial loader HINT: .on("value")
      database.ref().on("value", function(snapshot) {

        // Log everything that's coming out of snapshot
        console.log(snapshot.val());
        console.log(snapshot.val().tname);
        console.log(snapshot.val().tDestination);
        console.log(snapshot.val().tFrequency);
        console.log(snapshot.val().tnextArrival);
        console.log(snapshot.val().tminAway);

        // Change the HTML to reflect
        $("#tname-display").html(snapshot.val().tname);
        $("#tDestination-display").html(snapshot.val().tDestination);
        $("#tFrequency-display").html(snapshot.val().tFrequency);
        $("#tnextArrival-display").html(snapshot.val().tnextArrival);
        $("#tminAway-display").html(snapshot.val().tminAway);
        

        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
    

      // Assumptions
      var tFrequency = 3;

      // Time is 3:30 AM
      var firstTime = "03:30";

      // First Time (pushed back 1 year to make sure it comes before current time)
      var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
      console.log(firstTimeConverted);

      // Current Time
      var currentTime = moment();
      console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

      // Difference between the times
      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      console.log("DIFFERENCE IN TIME: " + diffTime);

      // Time apart (remainder)
      var tRemainder = diffTime % tFrequency;
      console.log(tRemainder);

      // Minute Until Train
      var tMinutesTillTrain = tFrequency - tRemainder;
      console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

      // Next Train
      var nextTrain = moment().add(tMinutesTillTrain, "minutes");
      console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

}

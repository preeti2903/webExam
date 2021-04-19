function validate(event) {
  clearMsg(event);
  var validate = true;
  var latitudeValue = event.querySelector("#latitudeErrorMsg").value;
  var longitudeValue = event.querySelector("#longitudeErrorMsg").value;

  if (latitudeValue < -90 || latitudeValue > 90) {
    validate = false;
    event.querySelector("#latitudeErrorMsg").innerHTML =
      "must be a valid Latitude (-90 to 90)";
  }
  if (longitudes < -180 || longitudes > 180) {
    validate = false;
    event.querySelector("#longitudeErrorMsg").innerHTML =
      "must be a valid Longitude (-180 to 180)";
  }
  return validate;
}
function clearMsg(event) {
  event.querySelector("#latitudeErrorMsg").innerHTML = "";
  event.querySelector("#longitudeErrorMsg").innerHTML = " ";
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function () {
    return validate(form);
  };
};

var flag = 0;
/*Function which is called on the preshow of the main form 
Function is creating toast .It is also declaring the 
Callback for the scroll and swipe event .
*/
function GestueHandlerfrm2() {
    var lblBasic = {
        id: "Toastlabel",
        skin: "labelskin1",
        text: "A row has been added",
        isVisible: true
    };
    var lblLayout = {
        containerWeight: 100,
        padding: [5, 5, 5, 5],
        margin: [5, 5, 5, 5],
        hExpand: true,
        vExpand: false
    };
    var lblLayout = {
        renderAsAnchor: true,
        wrapping: constants.WIDGET_TEXT_WORD_WRAP
    };

    //Creating the label.

    var lb1 = new kony.ui.Label(lblBasic, lblLayout, lblLayout);
    MailForm.add(lb1);
    MailForm.Toastlabel.isVisible = false;
    MailForm.Toastlabel.left = "80dp";
    MailForm.Toastlabel.top = "450dp";


    MailForm.MailRows.scrollingEvents = {
        onPull: onPullCallBCk
    };
    var gesture = MailForm.MailRows.rowTemplate.flexAnimate.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
        fingers: 1
    }, swipeToDelete);
}

/** This is a callback function which is called when the segment is scrolled down
OnScroll of the segment,a loading screen and toast message is displayed **/

function onPullCallBCk(Segment01) {
    var dataObj1;
    kony.timer.schedule("mytimer1", timerFunc1, 1, false);
    kony.application.dismissLoadingScreen();
    kony.timer.cancel("mytimer1");
    if (flag == 0) {
        dataObj1 = {
            Label01: "Pavithra",
            Label02: "Best Deals for Limited Time",
            Label03: "The sender of this mail is",
            Label04: "Feb 26",
            Image01: "icon3.png",
            Image02: "option1.png",
            btnDelete: "Delete",
            btnCancel: "Cancel"
        };
        flag = 1;
    } else {
        dataObj1 = {
            Label01: "Gainheight",
            Label02: "Loan is just a click away",
            Label03: "The sender of this mail is",
            Label04: "Feb 26",
            Image01: "icon2.png",
            Image02: "option1.png",
            btnDelete: "Delete",
            btnCancel: "Cancel"
        };
        flag = 0;
    }

    Segment01.addDataAt(dataObj1, 0);
    //MailForm.Toastlabel.isVisible = true;
    //kony.timer.schedule("mytimer2", timerFunc, 1, false);
}
/**Timer function to display a loading screen icon **/
function timerFunc1() {

    kony.application.showLoadingScreen("loadingscreenskin", "Please wait..", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "000000"
    });
}

/**Timer function to hide the toast message **/
function timerFunc() {
    MailForm.Toastlabel.isVisible = false;
  	kony.timer.cancel("mytimer1");
}

/**Function to delete a row **/
function deleteRowfrm(context) {

    //alert("context in delete:" + context);
    var SI = context.sectionIndex;
    var RI = context.rowIndex;

    //Delete the row
    //context.widgetInfo.removeAt(RI, SI);
    context.widgetInfo.removeAt(RI - 1);
}

/*Function which is called when a row is swipped */
function swipeToDelete(widgetRef, gestureInfo, context) {

    var transformObject1 = kony.ui.makeAffineTransform();
    transformObject1.translate(0, 0);

    var transformObject2 = kony.ui.makeAffineTransform();
    transformObject2.translate(-350, 0);


    var animationdef = {
        0: {
            left: 0
        },
        100: {
            left: -350
        }
    };

    var animDef = kony.ui.createAnimation(animationdef);
    var animationConfig = {
        duration: 2,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        "iterationCount": 1
    };

    function onAnimStart() {
        //	alert("animation start!");
    }

    function onAnimEnd() {
        // alert("animation end!");
    }

    var callBack = {
        animationStart: onAnimStart,
        animationEnd: onAnimEnd
    }


    widgetRef.animate(animDef, animationConfig, callBack);


}

/**Function to cancel the delete **/
function cancelDelete(context) {

    //  alert("context in cancel: "+ context.toString());

    var animationdef = {
        0: {
            left: -350
        }, // transform: transformObject1},
        100: {
            left: 0
        } // transform: transformObject2}
    };

    var animDef = kony.ui.createAnimation(animationdef);
    var animationConfig = {
        duration: 2,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        "iterationCount": 1
    };

    function onAnimStart() {
        //	alert("animation start!");
    }

    function onAnimEnd() {
        //alert("animation end!");
    }

    var callBack = {
        animationStart: onAnimStart,
        animationEnd: onAnimEnd
    };

    context.parent.flexAnimate.animate(animDef, animationConfig, callBack);
}
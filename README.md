# Kony_Segment_Sample_App
Application to create toast,pull to refresh and swipe to delete for Android


Steps for Delete and Cancel on Swipe of a Row:

1)Create a template for the segment rows.
2)Place a flex container inside this template.Let's call it flex1.
3)Place another flex container inside flex1.Let's call it flexAnimate.
4)Add "gestureRecogniser" for flexAnimate.Also make sure the outer flex i.e flex1 has its layout type property set as "Flow Horizontal".
5)Add two buttons i.e Delete and Cancel in flex1.
6)Add code for deleting the row onclick of Delete button and for displaying the row again onclick of Cancel button.
7)Now on swipe of the row,add code to move flex1 to left thereby displaying delete and cancel button.
8)You can have other actions defined onclick of the buttons depending upon the requirement.




Steps for Refresh when a row is pulled down:

1)Call a function on pull of the segment.
2)Add a row at index 0 of the segment on pull callback.
3)Add data to this row's widget dynamically.



Step for creating a toast:

1)Create a label dynamically in preshow of the form.
2)Set the isVisible property of the label to be false.
3)When the toast is to be displayed,set the isVisbile propety to be true and also start a timer for few secs.
4)This timer will be executed after the specified time.
5)Again set the isVisible property of this label to be false inside this timer function.

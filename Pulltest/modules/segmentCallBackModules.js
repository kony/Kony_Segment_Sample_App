function setDeleteButtonCallBack(){
 // FlexContainerFavorite.FlexContainerDeleteBtn.onClick = flx_onclick;
  FlexContainer0a902b761533d41.btnDelete.onClick = flx_onclick;
}

  function flx_onclick(widget, context){
	var sectionIndex = context["sectionIndex"];
	var rowIndex = parseInt(context["rowIndex"]);
	var seg = context["widgetInfo"];
    //alert(rowIndex);
    var transformProp1 = kony.ui.makeAffineTransform();
	transformProp1.scale(1,0); 
	
	var transformProp3 = kony.ui.makeAffineTransform();
	transformProp3.scale(1,1);
	var animDefinitionOne = {0  : {"transform":transformProp3},
        					100 : {"transform":transformProp1}};
    
                             var animDefinition = kony.ui.createAnimation(animDefinitionOne);
                             var animConfig = {"duration":0.3,"iterationCount":1,"delay":0,"fillMode":kony.anim.FORWARDS	};
	var finalAnimation = {definition: animDefinition, config: animConfig};
    kony.print("\nrow index:-"+parseInt(rowIndex));
    //frmFavorite.segFavRestaurents.removeAt(rowIndex, 0, finalAnimation);
    MailForm.MailRows.removeAt(rowIndex, 0, finalAnimation);
}
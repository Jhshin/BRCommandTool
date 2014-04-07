// Side Panel JS

Ext.onReady(function()
{
    new Ext.Viewport(
    {
        layout:"border",
        items:[

            makePanel("CS", sideMenuBar() , "west", 200 ,100 , "10, 30, 0 , 3")

        ]           
    });
});

/*
    makePanel(Panel Title, HTML Tag, Region(NORTH, ,SOUTHCENTER, EAST, WEST), 
    Width, Panel Height, Panel Margin )
*/
function makePanel(strTitle, strHTML, strRegion, nWidth , nHeight, strMargin)
{

    return new Ext.Panel(
            {
                title:  strTitle,
                html:   strHTML,
                margin: strMargin,
                width:  nWidth,
                height: nHeight,
                region: strRegion
            });
}

function sideMenuBar()
{                
    return "hi";  
}
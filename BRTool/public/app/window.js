Ext.onReady(function()
{
    new Ext.Viewport(
    {
        layout:"border",
        items:[

            makePanel("Push Notification", mainContent(), "center",100,0,"10, 3, 30, 0"),
            makePanel("", "<h1>Buddy Rush GM/CS/KPI</h1>", "north", 0, 100, "10, 3, 0, 0"),
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

function mainContent(){
    var contentHtml = "<p><h1>Push Notification</h1></p>" +
    "Content  " +
    "<span id = 'PushTextArea'>" +
    "<textarea rows='5' cols='60' name='pushContents'> Enter the Push Message </textarea></br>" +
    "</span>" +
    "<b>Time</b>  " +
    "<input type='date' name='date' id='date' value='' />" +
    "<input type='time' name='time' id='time' value='' />" +
    "<input type='checkbox' name='Reservation' id='Reservation' value=''/> <b>Reservation</b>";   

    return contentHtml;
}

function sideMenuBar()
{               
    makeTreeMenu()     
    return "hi";  
}

    function makeTreeMenu()
    {
        var store = Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true, 
                text:"",
                user:"",
                status:"", 
                children: [
                    { text:"CS", leaf: true },
                    { text:"GM", expanded: true, 
                        children: [
                            { text:"Event", leaf: true },
                            { text:"Send Mail", leaf: true},
                            { text:"Push Notification", leaf:true}
                        ]
                    },
                    { text: "KPI", leaf:true }
                ]
            }
        });     

        Ext.create('Ext.tree.Panel', {
        title: '<h3>Menu</h3>',
        width: 200,
        //If u don't input height size, it will be adjusted.
        padding : "120, 0, 0,0 ",
        store: store,
        rootVisible: false,        
        renderTo: Ext.getBody()
    });
}

// Ext.define('KitchenSink.view.tree.BasicTrees', {
//     extend: 'Ext.Container',
//     xtype: 'basic-trees',
//     width: 640,

//     layout: {
//         type: 'table',
//         columns: 2,
//         tdAttrs: { style: 'padding: 10px;' }
//     },

//     defaults: {
//         xtype: 'treepanel',
//         width: 300,
//         height: 200,
//         rootVisible: false,
//         // Sharing the store synchronizes the views:
//         store: 'Files'
//     },
    
//     initComponent: function() {
//         this.items = [
//             {
//                 title: 'Tree'
//             },
//             {
//                 title: 'Tree with No Lines',
//                 lines: false
//             },
//             {
//                 title: 'Tree with Arrows',
//                 useArrows: true,
//                 colspan: 2
//             }
//         ];

//         this.callParent();
//     }
// });
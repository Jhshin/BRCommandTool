Ext.onReady(function()
{
    new Ext.Viewport(
    {
        layout:"border",
        items:[
            new Ext.Panel(
            {
                title:"CENTER",
                html:"Center Panel",
                width:"100px",
                region:"center"
            }),
           
            new Ext.Panel(
            {
                title:"NORTH",
                html:"north Panel",
                margins:"0 3 0 3",
                region:"north",
                split:true
            }),            
            new Ext.Panel(
            {
                title:"SOUTH",
                html:"south Panel",
                margins:"3 3 3 3",
                region:"south",
                collapsible:true
            }),
            new Ext.Panel(
            {
                title:"EAST",
                html:"east Panel",
                margins:"0 3 0 3",
                region:"east",
                collapsible:true
            }),
            new Ext.Panel(
            {
                title:"west",
                html:"west Panel",
                margins:"0 0 0 3",
                region:"west",
                collapsible:true
            })
        ]          
    });
});


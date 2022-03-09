function init()
{
    addRequestHandler("Hi", onHiHandler);
     
    trace("Simple JS Example inited");
}
 
function destroy()
{
    trace("Simple JS Example destroyed");
}
 
function onHiHandler(params, sender) 
{
    trace("[JS] Got Hi from" + sender.getName());
    var response = new SFSObject();
    //response.putUtfString("from", sender.getName());
    send("Hi", response, getParentZone().getUserList());
    trace("[JS] Sent Hi from" + sender.getName() + " to others")
}
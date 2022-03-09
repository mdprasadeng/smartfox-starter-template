import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.exceptions.SFSException;
import com.smartfoxserver.v2.extensions.BaseSFSExtension;
import java.util.ArrayList;
import java.util.List;

public class ZoneExt extends BaseSFSExtension {

  @Override
  public void init() {

  }

  @Override
  public void destroy() {

  }

  @Override
  public void handleClientRequest(String s, User user, ISFSObject isfsObject) throws SFSException {
    if (s.equals("Hi")) {
      System.out.println("[Java] Got Hi from" + user.getName());
      SFSObject sfsObject = new SFSObject();
      sfsObject.putUtfString("name", user.getName());
      List<User> allUsers = new ArrayList<>();
      allUsers.addAll(getParentZone().getUserList());
      send("Hi", sfsObject, allUsers);
    }
  }
}

import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { Person, Phone, AccountBalance } from '@material-ui/icons';

export default function Lista() {
    return (
        <>
            <List component="ul">

                <ListItem button>
                    <ListItemIcon>
                        < AccountBalance />
                    </ListItemIcon>
                    <ListItemText>
                        Servicios
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText>
                        Cliente
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Phone />
                    </ListItemIcon>
                    <ListItemText>
                        Contactos
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>
        </>
    )
}
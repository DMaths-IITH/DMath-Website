import { IconType } from 'react-icons';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {GiBookshelf} from 'react-icons/gi';
import {BsPeople} from 'react-icons/bs';
import {BsNewspaper} from 'react-icons/bs';
import {GiSpellBook} from 'react-icons/gi';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {MdEventNote} from 'react-icons/md';
import {GiAchievement} from 'react-icons/gi';
import {BsDot} from 'react-icons/bs';

const IconMap: Map<string,IconType> = new Map([
    ["Academics", GiBookshelf],
    ["Research", GiSpellBook],
    ["People", BsPeople],
    ["News & Events", BsNewspaper],
    ["Achievements", GiAchievement],
    ["Admissions", AiOutlineUsergroupAdd],
    ["Recruitments", AiOutlineUserAdd],
    ["TimeTables", MdEventNote]
])

export function getIcon(pagename: string): IconType {
    const icon = IconMap.get(pagename)
    return icon ? icon : BsDot  
}
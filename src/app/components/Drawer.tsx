'use client';
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { MdOutlineExpandMore } from 'react-icons/md';
import { FcStatistics } from 'react-icons/fc';
import { PiChecksThin } from 'react-icons/pi';
import { PiClockCountdownThin } from 'react-icons/pi';
import { Div } from '@/app/utils/styleComponent';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const mainData = [
    {
        id: 1,
        icon: <FcStatistics />,
        name: 'Statistic Dashboard',
        children: [
            { id: 1, icon: <PiChecksThin />, name: 'Trading successfully', color: 'text-[#89f889]' },
            { id: 2, icon: <PiClockCountdownThin />, name: 'Total Revenue', color: 'text-[#bcd6ed]' },
        ],
    },
];
const Drawer = () => {
    const [onTab, setOnTab] = React.useState<boolean>(false);
    console.log(onTab);

    return (
        <Div className="w-fit fixed px-3 z-50 h-[92vh] shadow-[0_0_4px_#0a0a0a] bg-[#272727]" $css={`${!onTab ? 'width: 50px; padding: 0' : ''}`}>
            <Div className="w-fit text-end" $css={`.onTab{height: 122px;.iconTurn{transform: rotate(180deg);}}; ${!onTab ? 'width: 100%; text-align: center;' : ''}`}>
                <Switch
                    {...label}
                    defaultChecked={false}
                    onChange={(e) => {
                        setOnTab(e.target.checked);
                        const turnOn = document.querySelector('.turnOn');
                        if (!e.target.checked && turnOn) turnOn.classList.remove('onTab');
                    }}
                />
                {mainData.map((item) => (
                    <Div
                        key={item.id}
                        className="h-[41px] turnOn"
                        $css="overflow: hidden;transition: all 0.3s linear;"
                        onClick={(e: any) => {
                            const turnOn = document.querySelector('.turnOn');
                            if (turnOn)
                                if (turnOn.getAttribute('class')?.includes('onTab')) turnOn.classList.remove('onTab');
                                else turnOn.classList.add('onTab');
                        }}
                    >
                        <Div className="flex items-center p-2 px-5 cursor-pointer" $css={`${!onTab ? 'margin-left: -6px;' : ''}`}>
                            <div className=" text-[25px] ">{item.icon}</div>
                            <p className={`text-sm mx-2 ${!onTab ? 'mx-[11px]' : ''}`}>{item.name}</p>
                            <div className="text-[20px] iconTurn">
                                <MdOutlineExpandMore />
                            </div>
                        </Div>
                        <div className="w-[95.5%] h-[1px] bg-[#7c7c7c] relative left-[22px] mb-2 "></div>
                        {item.children.map((child, indexC) => (
                            <Div
                                key={child.id}
                                className="w-[74%] flex justify-start items-center p-2 cursor-pointer left-[72px] relative rounded-[3px] hover:bg-[#464646] "
                                onClick={(e) => e.stopPropagation()}
                            >
                                {indexC > 0 ? (
                                    <div className={`w-[38px] h-[1px] bg-[#7c7c7c] absolute left-[-38.5px] top-[0px] rotate-90 helloBar`}></div>
                                ) : (
                                    <div className={`w-[26px] h-[1px] bg-[#7c7c7c] absolute left-[-32.5px] top-[4px] rotate-90 helloBar`}></div>
                                )}
                                <div className="w-[20px] h-[1px] bg-[#7c7c7c] absolute left-[-20px] top-[19px] helloBar"></div>
                                <div className={`text-[20px] ${child.color}`}>{child.icon}</div>
                                <p className="text-[12px] mx-2">{child.name}</p>
                            </Div>
                        ))}
                    </Div>
                ))}
            </Div>
        </Div>
    );
};

export default Drawer;

// export const secondaryListItems = (
//     <React.Fragment>
//         <ListSubheader component="div" inset>
//             Saved reports
//         </ListSubheader>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Current month" />
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Last quarter" />
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale" />
//         </ListItemButton>
//     </React.Fragment>
// );

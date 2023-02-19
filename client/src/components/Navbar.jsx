import React, { useState } from 'react';
import { LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search, SettingsOutlined,
  ArrowDropDownOutlined } from '@mui/icons-material';
import FlexDetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from "state";
import profileImage from "assets/profile.jpeg";
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';


const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return <AppBar
      sx={{
        position: 'ststic',
        background: 'none',
        boxShadow: 'none',
      }}
  >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexDetween>
          <IconButton onClick={() => console.log('open/close sidebar')}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase plaseholder="Seach..." />
            <IconButton>
              <Search/>
            </IconButton>
          </FlexBetween>
        </FlexDetween>

        {/*RIGHT SIDEBAR*/}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
            <IconButton>
              <SettingsOutlined sx={{ fontSize: "25px" }} />
            </IconButton>
        </FlexBetween>
      </Toolbar>

  </AppBar>
}

export default Navbar;
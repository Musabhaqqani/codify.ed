import React from 'react'
import { Box, Button, Text, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { LANGUAGE_VERSIONS } from '../constants'

const languages = Object.entries(LANGUAGE_VERSIONS)

export default function languageSelector(props) {
    return (
        <div>
            <Box>
                <Menu>
                    <MenuButton as={Button} mb={5} >
                        {props.language}
                    </MenuButton>
                    <MenuList>
                        {languages.map(([language]) => (
                            <MenuItem key={language} onClick = {()=> props.onSelect(language)} >{language}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Box>
        </div>
    )
}

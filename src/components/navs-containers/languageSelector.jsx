import React from 'react'
import { Box, Button, Text, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { LANGUAGE_VERSIONS } from '../../constants'

const languages = Object.entries(LANGUAGE_VERSIONS)
const activeColor = "blue.400"

export default function languageSelector(props) {
    return (
        <div>
            <Box>
                <Menu isLazy>
                    <MenuButton as={Button} mb={5} >
                        {props.language}
                    </MenuButton>
                    <MenuList>
                        {languages.map(([language]) => (
                            <MenuItem key={language} onClick = {()=> props.onSelect(language)}
                            color={
                                language === props.language? activeColor : ""
                            }
                            bg={
                                language === props.language? "gray.800" : ""
                            }
                            _hover={
                                {
                                    color: activeColor,
                                    bg : "gray.900"
                                }
                            }
                             >{language}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Box>
        </div>
    )
}

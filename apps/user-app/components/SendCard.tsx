// "use server"

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react"


export function SendCard() {
    const [ amount, setAmount ] = useState("");
    const [ number, setNumber ] = useState("");
    return <div className="h-[90vh]">
        <Center>
            <Card title="Send">
                <div>
                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                        setNumber(value)
                    }}></TextInput>
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }}></TextInput>
                    <div>
                        <Button onClick={ () => {
                            await p2pTransfer(number, Number(amount) * 100 )
                        }}>Send</Button>
                    </div>
                </div>
            </Card>
        </Center>
   

    </div>
}
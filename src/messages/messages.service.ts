import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity'
@Injectable()
export class MessagesService {
  
  messages: Message[] = [{ name: 'Zeeks', text: 'Testu'}];
  clientToUser = {};
  //DO THIS WITH A DATABASE
  identify(name: string, clientId: string)
  {
    this.clientToUser[clientId] = name;
    //ADD A SELECT WUERY
    return Object.values(this.clientToUser);
  }

  getClientName(clientId: string)
  {
    return this.clientToUser[clientId];
  }
  create(createMessageDto: CreateMessageDto, clientId: string) {
    const message = {name: this.clientToUser[clientId], text: createMessageDto.text};
    this.messages.push(message);
    //INSERT TO DATABASE
    return message;
  }

  findAll() {
    console.log("=-=-=-=-=-=-=-=-> ", this.messages)
    return this.messages;
    //JUST ADD A SELECT QUERY LUL
  }

}

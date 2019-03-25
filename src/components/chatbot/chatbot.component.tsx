import * as React from 'react';
import styled from 'styled-components';
import ChatBotIcon from '../../lib/svg/roboto-logo.svg';
import bubble from '../../lib/svg/speech-bubble.svg';

interface ChatBotProps {}

interface ChatItem {
  type: 'send' | 'receive';
  message: string;
}

interface ChatBotState {
  toggle: boolean;
  ChatList: ChatItem[];
  input: string;
}

export const ChatBotBody = styled.div`
  /* overflow: auto; */
  /* position: fixed; */
  position: absolute;
  top: 38%;
  left: 74%; /* macbook pro 13" */
  /* top: 47%;
  left: 79%; */ /* 27' monitor 16:9 */
  background-color: white;
  width: 20rem;
  height: 25rem;
  border-radius: 13px;
  border-bottom-right-radius: 0;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Bubble = styled.img`
  /* position: fixed; */
  position: absolute;
  top: 88%;
  left: 93%;
  height: 12%;
  cursor: pointer;
`;

export const ReceptionWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const ReceptionBox = styled.div`
  width: auto;
  height: auto;
  background-color: #ffde32;
  border-radius: 16px;
  margin: 0.4rem 1rem 0 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const ReceptionText = styled.p`
  width: auto;
  height: 2.25rem;
  font-size: 1.5rem;
  margin: 0.5rem;
`;

export const SendWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

export const SendBox = styled.div`
  width: auto;
  height: auto;
  background-color: #6c63ff;
  border-radius: 16px;
  margin: 0.4rem 1rem 0 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const SendText = styled.p`
  width: auto;
  margin: 0.5rem;
  color: white;
  height: 2.25rem;
  font-size: 1.5rem;
`;

export const ChatBox = styled.div`
  overflow: auto;
  width: 100%;
  /* min-height: 19rem; */
  height: 18.4375rem;
`;

export const ChatForm = styled.form`
  /* position: sticky; */
  /* position: fixed; */
  width: 100%;
  height: 57px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 10px; */
  /* border-top: 0.5px solid #e6e6e6; */
  /* margin-top: 0.5rem; */
  /* margin: 0.5rem; */
`;

export const ChatInput = styled.input`
  /* position: sticky; */
  /* position: fixed; */
  width: 90%;
  height: auto;
  /* margin: 0.5rem; */
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.125rem;
`;

export const ChatBotTopDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: transparent;
  /* border-bottom: 0.5px solid #e6e6e6; */
  display: flex;
  align-items: center;
`;

export const ChatBotImg = styled.img`
  margin: 0.5rem;
`;

class ChatBot extends React.Component<ChatBotProps, ChatBotState> {
  public state: ChatBotState = {
    toggle: false,
    ChatList: [
      {
        type: 'send',
        message: 'Send Test',
      },
      {
        type: 'send',
        message: 'Send Test',
      },
      {
        type: 'receive',
        message: 'Receive Test',
      },
      {
        type: 'receive',
        message: 'Receive Test',
      },
      {
        type: 'receive',
        message: 'Receive Test',
      },
      {
        type: 'send',
        message: 'Send Test',
      },
      {
        type: 'send',
        message: 'Send Test',
      },
      {
        type: 'receive',
        message: 'Receive Test',
      },
      {
        type: 'receive',
        message: 'Receive Test',
      },
      {
        type: 'receive',
        message: 'Receive Test',
      },
    ],
    input: '',
  };

  public ChatScroll: React.RefObject<HTMLDivElement> | null | undefined;

  // public componentDidMount = () => {
  //   this.ChatScroll = React.createRef();
  //   console.log(this.ChatScroll);
  // };

  // public shouldComponentUpdate = () => {
  //   this.ChatScroll = React.createRef();
  //   console.log(this.ChatScroll);

  //   return true;
  // };

  public handleToggle = async (): Promise<void> => {
    this.setState(() => ({
      toggle: !this.state.toggle,
    }));

    this.ChatScroll = React.createRef();
    await console.log(this.ChatScroll);
    await console.log(this.ChatScroll.current);
    // await console.log(this.ChatScroll);
  };

  public handleEnter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { input } = this.state;

    this.setState(state => ({
      ChatList: state.ChatList.concat({
        type: 'send',
        message: input,
      }),
    }));
  };

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    // this.setState((state) => ({
    //   input:e.currentTarget.value,
    // }));

    this.setState({
      input: e.currentTarget.value,
    });

    console.log(e.currentTarget.value);
  };

  public render() {
    const { handleToggle, handleEnter, handleChange } = this;
    const { toggle, ChatList, input } = this.state;

    const chatList = ChatList.map((item, idx) => {
      if (item.type === 'send') {
        return (
          <SendWrapper key={idx}>
            <SendBox>
              <SendText>{item.message}</SendText>
            </SendBox>
          </SendWrapper>
        );
      } else {
        return (
          <ReceptionWrapper key={idx}>
            <ReceptionBox>
              <ReceptionText>{item.message}</ReceptionText>
            </ReceptionBox>
          </ReceptionWrapper>
        );
      }
    });

    //   if (toggle) {
    //     return (
    //       <>
    //         <ChatBotBody>
    //           <ChatBotTopDiv>
    //             <ChatBotImg src={ChatBotIcon} alt='' />
    //             한봇
    //           </ChatBotTopDiv>
    //           <ChatBox ref={this.ChatScroll}>
    //             {chatList}
    //             {/* <ReceptionWrapper>
    //               <ReceptionBox>
    //                 <ReceptionText>테스트</ReceptionText>
    //               </ReceptionBox>
    //             </ReceptionWrapper>
    //             <SendWrapper>
    //               <SendBox>
    //                 <SendText>시퍼어저 하늘로우리들ㅇ느 ㅂ려</SendText>
    //               </SendBox>
    //             </SendWrapper>
    //             <SendWrapper>
    //               <SendBox>
    //                 <SendText>ㅁ러쟈ㅐ서ㅏㅣ넘랮;ㅓㄴ아ㅣㄹ머ㅐㅑ;러재;</SendText>
    //               </SendBox>
    //             </SendWrapper>
    //             <ReceptionWrapper>
    //               <ReceptionBox>
    //                 <ReceptionText>테스트</ReceptionText>
    //               </ReceptionBox>
    //             </ReceptionWrapper>
    //             <ReceptionWrapper>
    //               <ReceptionBox>
    //                 <ReceptionText>테스트</ReceptionText>
    //               </ReceptionBox>
    //             </ReceptionWrapper>
    //             <SendWrapper>
    //               <SendBox>
    //                 <SendText>ㅁ러쟈ㅐ서ㅏㅣ넘랮;ㅓㄴ아ㅣㄹ머ㅐㅑ;러재;</SendText>
    //               </SendBox>
    //             </SendWrapper>
    //             <ReceptionWrapper>
    //               <ReceptionBox>
    //                 <ReceptionText>테스트</ReceptionText>
    //               </ReceptionBox>
    //             </ReceptionWrapper>
    //             <ReceptionWrapper>
    //               <ReceptionBox>
    //                 <ReceptionText>테스트</ReceptionText>
    //               </ReceptionBox>
    //             </ReceptionWrapper> */}
    //           </ChatBox>
    //           <ChatForm onSubmit={handleEnter}>
    //             <ChatInput
    //               placeholder='한봇과 안부인사를 해봐요!'
    //               onChange={handleChange}
    //               value={input}
    //             />
    //           </ChatForm>
    //         </ChatBotBody>
    //         <Bubble src={bubble} alt='' onClick={handleToggle} />
    //       </>
    //     );
    //   }

    //   return <Bubble src={bubble} alt='' onClick={handleToggle} />;

    return (
      <>
        <ChatBotBody style={{ display: toggle ? 'flex' : 'none' }}>
          <ChatBotTopDiv>
            <ChatBotImg src={ChatBotIcon} alt='' />
            한봇
          </ChatBotTopDiv>
          <ChatBox ref={this.ChatScroll}>
            {chatList}
            {/* <ReceptionWrapper>
                <ReceptionBox>
                  <ReceptionText>테스트</ReceptionText>
                </ReceptionBox>
              </ReceptionWrapper>
              <SendWrapper>
                <SendBox>
                  <SendText>시퍼어저 하늘로우리들ㅇ느 ㅂ려</SendText>
                </SendBox>
              </SendWrapper>
              <SendWrapper>
                <SendBox>
                  <SendText>ㅁ러쟈ㅐ서ㅏㅣ넘랮;ㅓㄴ아ㅣㄹ머ㅐㅑ;러재;</SendText>
                </SendBox>
              </SendWrapper>
              <ReceptionWrapper>
                <ReceptionBox>
                  <ReceptionText>테스트</ReceptionText>
                </ReceptionBox>
              </ReceptionWrapper>
              <ReceptionWrapper>
                <ReceptionBox>
                  <ReceptionText>테스트</ReceptionText>
                </ReceptionBox>
              </ReceptionWrapper>
              <SendWrapper>
                <SendBox>
                  <SendText>ㅁ러쟈ㅐ서ㅏㅣ넘랮;ㅓㄴ아ㅣㄹ머ㅐㅑ;러재;</SendText>
                </SendBox>
              </SendWrapper>
              <ReceptionWrapper>
                <ReceptionBox>
                  <ReceptionText>테스트</ReceptionText>
                </ReceptionBox>
              </ReceptionWrapper>
              <ReceptionWrapper>
                <ReceptionBox>
                  <ReceptionText>테스트</ReceptionText>
                </ReceptionBox>
              </ReceptionWrapper> */}
          </ChatBox>
          <ChatForm onSubmit={handleEnter}>
            <ChatInput
              placeholder='한봇과 안부인사를 해봐요!'
              onChange={handleChange}
              value={input}
            />
          </ChatForm>
        </ChatBotBody>
        <Bubble src={bubble} alt='' onClick={handleToggle} />
      </>
    );
  }
}

export default ChatBot;

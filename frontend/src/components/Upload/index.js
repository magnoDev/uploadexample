import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
    renderDragMessage = (isDragActive, isDragReject) => {
        if(!isDragActive) {
            return <UploadMessage>Arraste arquivos PDF aqui...</UploadMessage>
        }
        
        if (isDragReject) {
            return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
        }

        return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>

    };

    render() {
        const { onUpload } = this.props;
        return (
            <Dropzone accept="application/pdf" onDropAccepted={ onUpload }>
                { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <DropContainer { ... getRootProps() }
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input { ... getInputProps()} />
                        {this.renderDragMessage(isDragActive, isDragReject)}
                        <UploadMessage/>
                    </DropContainer>
                ) }
            </Dropzone>
        );
    }
}
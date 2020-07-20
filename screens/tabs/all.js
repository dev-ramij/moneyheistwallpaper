import React, { Component } from 'react';
import {
    Dimensions, FlatList, Image, ImageBackground, Modal as ReactModal, ToastAndroid,
    PermissionsAndroid, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
// import { TextButton } from 'react-native-material-buttons';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import WallpaperManager from '@ajaybhatia/react-native-wallpaper-manager';
import { Button } from 'react-native-paper';
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob';
import RNFetchBlob from 'rn-fetch-blob';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class AllImages extends Component {

    state = {
        isVisible: false,
        openModal: false,
        openLoader: false,
        loadedImages: [],
        src: ''
    }

    allImages = this.props.images;

    downloadFileToTheStorage = async () => {


        //Function to check the platform
        //If iOS the start downloading
        //If Android then ask for runtime permission

        if (Platform.OS === 'ios') {
            this.downloadImage();
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message: 'This app needs access to your storage to download Photos',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //Once user grant the permission start downloading
                    console.log('Storage Permission Granted.');
                    this.downloadImage();
                } else {
                    //If permission denied then show alert 'Storage Permission Not Granted'
                    alert('Storage Permission Not Granted');
                }
            } catch (err) {
                //To handle permission related issue
                console.warn(err);
            }
        }

    }
    downloadImage = () => {
        //Main function to download the image
        ToastAndroid.show('Downloading ...', ToastAndroid.SHORT)
        let date = new Date(); //To add the time suffix in filename
        //Image URL which we want to download
        //Getting the extention of the file
        let ext = this.getExtention(this.state.src);
        ext = '.' + ext[0];
        //Get config and fs from RNFetchBlob
        //config: To pass the downloading related options
        //fs: To get the directory path in which we want our image to download
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                //Related to the Android only
                useDownloadManager: true,
                notification: true,
                path:
                    PictureDir +
                    '/city_image_' + Math.floor(date.getTime() + date.getSeconds() / 2) + ext,
                description: 'Image',
            },
        };
        config(options)
            .fetch('GET', this.state.src)
            .then(res => {
                //Showing alert after successful downloading
                ToastAndroid.show('Image Downloaded Successfully.', ToastAndroid.SHORT)
                AdMobInterstitial.setAdUnitID('ca-app-pub-2962258148755216/9272302559');
                AdMobInterstitial.requestAd().then(() => {
                    AdMobInterstitial.showAd();

                });
            });
    };

    getExtention = filename => {
        //To get the file extension
        return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
    };



    toggleModal = (src) => {
        this.setState({
            isVisible: !this.state.isVisible,
            src: src
        })


    }

    openImage = (src) => {
        this.setState({
            src: src
        })
        this.toggleModal
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: windowWidth * 0.6,
                    backgroundColor: "#000",
                }}
            />
        );
    };

    isLoadedImage = (id) => {
        if (this.state.loadedImages.includes(id)) {
            return false;
        }
        return true
    }

    onLoadImage = (id) => {
        this.state.loadedImages.push(id);
        this.setState({
            loadedImages: this.state.loadedImages
        })
    }

    Item = (props) => {
        return (
            <View style={styles.item}>
                <TouchableOpacity
                    onPress={
                        () => this.toggleModal(props.title.src)
                        //  this.setState({
                        //     src: props.title.src
                        // })
                    }
                // disabled={this.isLoadedImage(props.title.id)}
                >
                    <Image
                        // onLoad={()=>this.onLoadImage(props.title.id)}
                        style={styles.image}
                        source={{ uri: String(props.title.src) }}
                    />
                </TouchableOpacity>

            </View>
        );
    }

    _callback = res => {
        console.log('Response: ', res);
    };


    setWallpaper = (item) => {
        console.log("Clicked wallpaper")
        if (item == 'mobile') {
            item = 'both'
        }
        this.setState({
            openLoader: true,
            openModal: false
        })
        WallpaperManager.setWallpaper({ uri: String(this.state.src), screen: String(item) }, res => {
            this.setState({
                isVisible: false,
                openLoader: false
            })
            AdMobInterstitial.setAdUnitID('ca-app-pub-2962258148755216/1479133517');
            AdMobInterstitial.requestAd().then(() => {
                AdMobInterstitial.showAd();

            });

        })

    }

    render() {
        console.log("All images: ", this.allImages)
        return (
            <SafeAreaView style={styles.container}>
                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-2962258148755216/9357623535"
                    didFailToReceiveAdWithError={err => console.log(err)} />
                <FlatList
                    data={this.allImages}
                    columnWrapperStyle={{ justifyContent: 'space-between', }}
                    renderItem={({ item }) => <this.Item title={item} />}
                    numColumns={3}
                />
                <ReactModal animationType={"fade"} transparent={true}
                    visible={this.state.isVisible}

                    onRequestClose={() => {
                        this.setState({
                            isVisible: !this.state.isVisible
                        })
                    }}>
                    {/*All views of Modal*/}
                    {/*Animation can be slide, slide, none*/}

                    <View style={styles.modal}>
                        <ImageBackground source={{ uri: String(this.state.src) }}
                            style={styles.backgroundImage}>
                            <View style={styles.header}>

                                <AntDesign
                                    style={styles.icon}
                                    name="left"
                                    size={30}
                                    color='black'
                                    onPress={this.toggleModal}
                                />
                                <View style={styles.buttonGroup}>
                                    <TouchableOpacity style={styles.downloadIcon}>
                                        <AntDesign

                                            name="download"
                                            size={30}
                                            color='white'
                                            onPress={this.downloadFileToTheStorage}
                                        />
                                    </TouchableOpacity>
                                    <Button color="aqua" mode="text" style={styles.textButton} onPress={() => {
                                        console.log("click")
                                        this.setState({
                                            openModal: !this.state.openModal
                                        })

                                    }}>Set As Wallpaper</Button>
                                </View>

                            </View>
                        </ImageBackground>

                    </View>

                </ReactModal>

                <View>
                    <Modal
                        animationIn='bounceIn'
                        animationOut='bounceOut'
                        isVisible={this.state.openLoader}

                    >
                        <View style={styles.loaderContainer}>
                            <View style={styles.loaderHeader}>
                                {/* <MaterialIcons name="menu" size={28} onPress={this.openMenu} style={styles.icon} /> */}
                                <Image source={require('../../gear_duo.gif')} style={styles.loaderImage} />
                                <View>
                                    <Text style={styles.text}> Setting wallpaper</Text>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>

                <View>
                    <Modal
                        animationIn='bounceIn'
                        animationOut='bounceOut'
                        isVisible={this.state.openModal}
                        onBackdropPress={() => {
                            this.setState({
                                openModal: !this.state.openModal
                            })
                        }}
                        onRequestClose={() => {
                            this.setState({
                                openModal: !this.state.openModal
                            })
                        }}
                    >
                        <View style={styles.modalView}>
                            <FlatList
                                data={[
                                    { key: 'Home Screen', icon: 'home' }, { key: 'Lock Screen', icon: 'lock' }, { key: 'Both Screen', icon: 'mobile' }
                                ]}
                                style={{ opacity: 1 }}
                                renderItem={({ item }) =>
                                    <TouchableOpacity onPress={() => this.setWallpaper(item.icon)}>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-around'
                                        }} >
                                            <FontAwesome
                                                size={30}
                                                onPress={this.toggleModal}
                                                style={styles.optionIcon} name={item.icon} />
                                            <Text style={styles.optionItem}>{item.key}</Text>
                                        </View>
                                    </TouchableOpacity>}
                                ItemSeparatorComponent={this.renderSeparator}
                            />
                        </View>
                    </Modal>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalView: {
        backgroundColor: '#18233a',
        opacity: 0.7,
        width: windowWidth * 0.6,
        height: windowHeight * 0.2,
        alignSelf: 'center',
        top: windowHeight * 0.04,
        borderRadius: windowHeight * 0.03,
        alignItems: 'center',

    },
    loaderContainer: {
        backgroundColor: '#2f3841',
        opacity: 0.7,
        width: windowWidth * 0.8,
        alignSelf: 'center',
        top: windowHeight * 0.04,
        alignItems: 'center',

    },
    textBox: {
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'teal',
        left: 120
    },
    textButton: {
        flex: 0.5,
        color: 'teal',
        fontWeight: 'bold',

    },
    item: {
        backgroundColor: '#c1c1c1',
        borderRadius: 10,
        flex: 0.5,
        margin: 4,
        height: 200
    },
    optionItem: {
        padding: 10,
        fontSize: 18,
        height: 50,
        color: 'aqua'
    },
    optionIcon: {
        marginTop: 10,
        marginLeft: 20,
        color: 'skyblue'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    loaderImage: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 16,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cardStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.6)'

    },
    header: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#4f6529',
        opacity: 0.8
    },

    loaderHeader: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        // backgroundColor: '#6d73b0',
        // opacity: 0.5
    },

    text: {
        color: 'aqua',
        fontSize: 25,
        opacity: 1,
        fontWeight: 'bold',
        padding: 10
    },
    icon: {
        position: 'absolute',
        left: 16,
        top: 10,
    },
    downloadIcon: {
        flex: 0.5,
        right: 10,
        position: 'absolute',
        top: 8,
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    }
});
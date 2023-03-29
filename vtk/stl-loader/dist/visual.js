//Select div for rendering
const vtkRenderScreen = vtk.Rendering.Misc.vtkFullScreenRenderWindow.newInstance({
    container: document.querySelector('#vtk-renderer'),
    background: [0.,0.,0.]
  });
  //Create volume to render
  const actor                  = vtk.Rendering.Core.vtkActor.newInstance();
  const mapper                 = vtk.Rendering.Core.vtkMapper.newInstance();
  const cone                   = vtk.Filters.Sources.vtkConeSource.newInstance();
  
  
  // create orientation widget
  const axes                   = vtk.Rendering.Core.vtkAxesActor.newInstance();
  const orientationWidget = vtk.Interaction.Widgets.vtkOrientationMarkerWidget.newInstance({
    actor: axes,
    interactor: vtkRenderScreen.getRenderWindow().getInteractor(),
  });
  orientationWidget.setEnabled(true);
  orientationWidget.setViewportCorner(
    vtk.Interaction.Widgets.vtkOrientationMarkerWidget.Corners.BOTTOM_RIGHT
  );
  orientationWidget.setViewportSize(0.15);
  orientationWidget.setMinPixelSize(100);
  orientationWidget.setMaxPixelSize(300);
  
  actor.setMapper(mapper);
  mapper.setInputConnection(cone.getOutputPort());
  vtkRenderScreen.getRenderer().addActor(actor);
  vtkRenderScreen.getRenderer().resetCamera();
  
  //Start rendering
  vtkRenderScreen.getRenderWindow().render();
  
// window.addEventListener('load', ()=> {
//     const form = document.querySelector("#file-submit-form");
//     const input = document.querySelector("#file-submit-input");
//     const list_el = document.querySelector("#files");

//     // console.log(form);

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const files = input.value;

//         // checks input values from line 17 in index
//         if(!files){
//             alert("Please submit an stl, open foam file");
//             return;
//         }
//         // press f12 in the browser to view the properties of whatever was logged
//         console.log(files);

//         //lists our values that were submitted under "Recent Files", nothing of importance

//         const file_el = document.createElement("div");
//         file_el.classList.add("files");

//         const file_content_el = document.createElement("div");
//         file_content_el.classList.add("content");
//         file_content_el.innerText = files;

//         file_el.appendChild(file_content_el);

//         list_el.appendChild(file_el);
//     })
// })
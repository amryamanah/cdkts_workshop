import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodeBuildStep, CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class WorkshopPipelineStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // Pipeline code goes here

        // The basic pipeline declaration. This sets the initial structure
        // of our pipeline
        const pipeline = new CodePipeline(
            this, "CdktsWorkshopPipeline", 
            {
                pipelineName: "CdktsWorkshopPipeline",
                synth: new ShellStep('SynthStep', {
                    input: CodePipelineSource.connection(
                        'amryamanah/cdkts_workshop',
                        'main', {
                            connectionArn: "arn:aws:codestar-connections:ap-southeast-1:710948242070:connection/36f425b8-1a44-4a27-87b1-a96c2558c0ff"
                        }
                    ),
                    commands: [
                        'npm install -g aws-cdk',
                        "pip install -r requirements.txt",
                        'npx cdk synth',
                    ]
                })
            }
        );
    }

    
}